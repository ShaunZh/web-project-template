module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      // 转换忽略规则
      selectorBlackList: ['van-', /^html$/]
    }
  }
}
