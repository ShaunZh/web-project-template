/**
 * @Author: Hexon
 * @Date: 2018/11/9 下午11:50
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/9 下午11:50
 * @description:
 */
const Koa = require('koa');
const router = require('./routers/');
const cors = require('koa2-cors'); // cors处理
const app = new Koa();

app.use(cors()); // cors处理中间件
app.use(router.routes()).use(router.allowedMethods()); // 路由中间件

app.listen(3000); // 监听端口
