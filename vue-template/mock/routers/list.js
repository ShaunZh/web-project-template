/*
 * @Description:
 * @Author:
 * @Date: 2020-03-25 13:39:56
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 18:31:58
 */
const router = require('koa-router')()
const Mock = require('mockjs')

router.post('/', async (ctx) => {
  console.log('ctx: ', ctx.body)
  const pageNumbers = ctx.body.page && ctx.body.page.pageNumbers
  const data = Mock.mock({
    code: 200,
    result: {
      'data|10': [
        {
          number: '@id',
          username: '@cname',
          imgSrc: '@image(272x154)',
          avatar: '@image(32x32)',
          title: '@csentence(3, 20)',
          depart: '@csentence(3, 20)'
        }
      ],
      page: {
        pageNumbers: pageNumbers || 1,
        countPerPages: 10
      },
      total: 100
    }
  })
  ctx.body = data
})

router.post('/edit', async (ctx) => {
  const data = {
    code: 200
  }
  ctx.body = data
})

router.post('/detail', async (ctx) => {
  const data = Mock.mock({
    code: 200,
    result: {
      number: '@id',
      username: '@cname',
      imgSrc: '@image(272x154)',
      avatar: '@image(32x32)',
      title: '@csentence(3, 20)',
      depart: '@csentence(3, 20)'
    }
  })
  ctx.body = data
})

module.exports = router
