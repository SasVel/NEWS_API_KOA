import Koa from "Koa";
import Router from "koa-router";
const router = new Router(); 
import Article from '../models/article.js';
import { getAllArticles, getArticleById, getArticlesByParameters } from '../services/newsService.js';


//Get All request
router.get('/articles', async ctx => {
    try {
        let articleEntries = await getAllArticles(ctx)
        ctx.body = articleEntries;
    } catch (err) {
        console.log(err);
    }
    
})

//Get by Id
router.get('/article/:id', async ctx => {
    try {
        let articleEntry = await getArticleById(ctx)
        ctx.body = articleEntry;
    } catch (err) {
        console.log(err);
    }
    
})

//Get by parameters
router.get('/article', async ctx => {
    try {
        let query = ctx.request.query;
        console.log(query.includes)
        let articleEntries = await getArticlesByParameters(ctx)
        ctx.body = articleEntries;
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
router.delete('/article/:id', async ctx => {
    try {
        let articleEntry = await getArticleById(ctx)
        articleEntry.deleteOne()
        ctx.body = 'Deleted successfully';
    } catch (err) {
        ctx.body = 'Deleted unsuccessfully';
        console.log(err);
    }
    
})

//Edit By Id request
router.patch('/article/:id', async ctx => {
    try {
        let reqBody = ctx.request.body;
        let articleEntry = await getArticleById(ctx)
        if (reqBody != null) {
            if (reqBody.reporterName != null) {
                articleEntry.reporterName = reqBody.reporterName;
            }
            if (reqBody.gossip != null) {
                articleEntry.gossip = reqBody.gossip;
            }
        }
        const editedEntry = await articleEntry.save();
        ctx.response.body = editedEntry
        ctx.response.status = 200

        ctx.body = 'Updated successfully';
    } catch (err) {
        ctx.body = 'Updated unsuccessfully';
        console.log(err);
    }
})





export default router;