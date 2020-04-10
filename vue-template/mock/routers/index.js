/**
 * @Author: Hexon
 * @Date: 2018/11/10 上午12:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/10 上午12:33
 * @description:
 */

const router = require('koa-router')()

const list = require('./list')

router.use('/list', list.routes(), list.allowedMethods())

module.exports = router
