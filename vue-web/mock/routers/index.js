/**
 * @Author: Hexon
 * @Date: 2018/11/10 上午12:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/10 上午12:33
 * @description:
 */

const router = require('koa-router')();

const merchant = require('./merchant');
const user = require('./user');

router.use('/mer', merchant.routes(), merchant.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;
