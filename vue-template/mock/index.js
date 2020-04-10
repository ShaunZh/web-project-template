/**
 * @Author: Hexon
 * @Date: 2018/11/9 下午11:50
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/9 下午11:50
 * @description:
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./routers')
const cors = require('koa2-cors') // cors处理
const app = new Koa()

app.use(cors()) // cors处理中间件
app.use(bodyParser())
app.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body
  next()
})
app.use(router.routes()).use(router.allowedMethods()) // 路由中间件

app.listen(3333) // 监听端口
