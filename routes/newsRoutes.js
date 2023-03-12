const Koa = require("Koa")
const Router = require("koa-router");
const router = new Router(); 
const Gossip = require('../models/gossip')

router.get('/gossip', async ctx => {
    try {
        let gossipEntries = await Gossip.find();
        ctx.body = gossipEntries;
    } catch (err) {
        console.log(err);
    }
    
})

router.post('/gossip', async (ctx, next) => {
    try {
        console.log(ctx.request.body)
        ctx.response.body = ctx.body

        return (true)
    } catch (err) {
        console.log(err.message)
    }
    next
})




module.exports = router;