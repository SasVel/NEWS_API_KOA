const Koa = require("Koa")
const Router = require("koa-router");
const router = new Router(); 
const Gossip = require('../models/gossip')

//GetAll request
router.get('/gossips', async ctx => {
    try {
        let gossipEntries = await Gossip.find();
        ctx.body = gossipEntries;
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
        return (true)
    } catch (err) {
        console.log(err.message)
    }
    next
})




module.exports = router;