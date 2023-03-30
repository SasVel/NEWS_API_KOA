import dotenv from "dotenv"
dotenv.config()

import Koa from "Koa"
import Router from "koa-router"
import mongoose from "mongoose"
import bodyParser from "koa-bodyparser"

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

const app = new Koa();
const router = new Router(); 

import newsRouter from './routes/newsRoutes.js'
app.use(bodyParser())
app.use(newsRouter.routes())

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.API_PORT);

module.exports = app.listen(process.env.API_PORT);