const Koa = require("Koa")
const Router = require("koa-router")
const router = new Router(); 
const Gossip = require('../models/gossip')

router.get('/gossip', async ctx => {
    try {
        ctx.body = {
            //Id: ctx.params.id,
            gossip: JSON.stringify( await Gossip.find())
        }
        ctx.response.status = 200;
    } catch (err) {
        console.log(err);
    }
    
})

router.post('/gossip', async ctx => {
    try {
        ctx.body = {
            
        }
    } catch (error) {
        
    }
})

module.exports = router;