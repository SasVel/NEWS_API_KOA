const Koa = require("Koa")
const Router = require("koa-router");
const router = new Router(); 
const Article = require('../models/article')

//Get All request
router.get('/articles', async ctx => {
    try {
        let articleEntries = await Article.find();
        ctx.body = articleEntries;
    } catch (err) {
        console.log(err);
    }
    
})

//Get by Id
router.get('/article/:id', async ctx => {
    try {
        let articleEntry = await getGossip(ctx);
        ctx.body = articleEntry;
    } catch (err) {
        console.log(err);
    }
    
})

//Post request
router.post('/article', async (ctx, next) => {
    try {
        const reqBody = ctx.request.body;
        const entry = new Article({
            reporterName: reqBody.reporterName,
            title: reqBody.title,
            body: reqBody.body,
            tldr: reqBody.tldr
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
        let gossipEntry = await getGossip(ctx)
        gossipEntry.deleteOne()
        ctx.body = 'Deleted successfully';
    } catch (err) {
        ctx.body = 'Deleted unsuccessfully';
        console.log(err);
    }
    
})

//Edit By Id request
router.patch('/gossip/:id', async ctx => {
    try {
        let reqBody = ctx.request.body;
        let gossipEntry = await getGossip(ctx)
        if (reqBody != null) {
            if (reqBody.reporterName != null) {
                gossipEntry.reporterName = reqBody.reporterName;
            }
            if (reqBody.gossip != null) {
                gossipEntry.gossip = reqBody.gossip;
            }
        }
        const editedEntry = await gossipEntry.save();
        ctx.response.body = editedEntry
        ctx.response.status = 200

        ctx.body = 'Updated successfully';
    } catch (err) {
        ctx.body = 'Updated unsuccessfully';
        console.log(err);
    }
})


async function getGossip(ctx)
{
    let gossipEntry
    try {
         gossipEntry = await Article.findById(ctx.params.id);
        if (gossipEntry == null) {
            
            ctx.response.status = 404;
            return null
        }
        return gossipEntry;
    } catch (err) {
        console.log(err);
        return ctx.response.status = 500;
    }
}


module.exports = router;