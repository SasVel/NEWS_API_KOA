const Koa = require("Koa")
const Router = require("koa-router");
const router = new Router(); 
const Gossip = require('../models/gossip')

//Get All request
router.get('/gossips', async ctx => {
    try {
        let gossipEntries = await Gossip.find();
        ctx.body = gossipEntries;
    } catch (err) {
        console.log(err);
    }
    
})

//Get by Id
router.get('/gossip/:id', async ctx => {
    try {
        let gossipEntry = await Gossip.findById(ctx.params.id);
        ctx.body = gossipEntry;
    } catch (err) {
        console.log(err);
    }
    
})

//Post request
router.post('/gossip', async (ctx, next) => {
    try {
        const reqBody = ctx.request.body;
        const entry = new Gossip({
            reporterName: reqBody.reporterName,
            gossip: reqBody.gossip
        })
        const newEntry = await entry.save();
        ctx.response.body = newEntry
        ctx.response.status = 201
        return ((true))
    } catch (err) {
        console.log(err.message)
    }
    next
})

//Delete By Id request
router.delete('/gossip/:id', async ctx => {
    try {
        let gossipEntry = await Gossip.findById(ctx.params.id);
        gossipEntry.deleteOne()
        ctx.body = 'Deleted successfully';
    } catch (err) {
        ctx.body = 'Deleted unsuccessfully';
        console.log(err);
    }
    
})




module.exports = router;