/**
 * @Author: Hexon
 * @Date: 2018/11/10 上午12:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/10 上午12:33
 * @description:
 */
const router = require('koa-router')();

module.exports = router.get('/getMerchantList', async ctx => {
  ctx.body = {
    code: 200,
    result: {
      data: [
        {
          id: 1,
          name: '小丸子'
        },
        {
          id: 2,
          name: '张小虾'
        }
      ]
    }
  };
});
