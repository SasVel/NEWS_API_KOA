require("dotenv").config()

const Koa = require("Koa")
const Router = require("koa-router")
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

const app = new Koa();
const router = new Router(); 

router.get("/feb/:id", ctx => {
    ctx.body = {
        Day: ctx.params.id,
        weather: 'rainy'
    }
})

const newsRouter = require('./routes/newsRoutes')
app.use('/newsRoutes', newsRouter)

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.API_PORT);
