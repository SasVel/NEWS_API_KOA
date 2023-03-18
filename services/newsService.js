import Article from '../models/article.js'
import dayjs from 'dayjs'
import Router from "koa-router";
const router = new Router(); 

export async function getAllArticles(ctx)
{
    return Article.find();
}

export async function getArticleById(ctx)
{
    let articleEntry
    try {
         articleEntry = await Article.findById(ctx.params.id);
        if (articleEntry == null) {
            
            ctx.response.status = 404;
            return null
        }
        return articleEntry;
    } catch (err) {
        console.log(err);
        return ctx.response.status = 500;
    }
}

export async function getArticlesByParameters(ctx)
{
    let articleEntries;
    try {
        articleEntries = await Article.find( { 
            date: { $gte: dayjs(query.fromDate), $lte: dayjs(query.toDate) }, 
            body: { $in: dayjs(query.includes) }, 
            reporterName: { $eq: query.reporterName } })
        if (articleEntries == null) {
            ctx.response.status = 404;
            return null
        }
        return articleEntries
    } catch (err) {
        console.log(err)
        return null
    }
    
}
