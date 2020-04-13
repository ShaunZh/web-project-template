/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-13 15:58:56
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-13 16:02:03
 */
const mixin = {
  data: () => {
    return {
      offsetTop: 0 // 保存垂直滚动条滚动距离
    }
  },
  deactivated() {
    // 记录离开时的位置
    this.offsetTop = document.documentElement.scrollTop || document.body.scrollTop
    console.log('mixin set - offsetTop : ', this.offsetTop)
  },
  activated() {
    // 恢复到之前的位置
    document.documentElement.scrollTop = document.body.scrollTop = this.offsetTop
    console.log('minx get - offsetTop : ', this.offsetTop)
  }
}

export default mixin
