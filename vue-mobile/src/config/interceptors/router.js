/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:33
 */
export function routerBeforeEachFunc(to, from, next) {
  // 判断是否有权限访问
  // const auth = session.get(gGlobal.const['STORAGE/SESSION'].auth);
  // if ((auth === null || !auth.length) && to.path !== '/login') {
  //   gGlobal.vbus.$emit('auth.exceed', '您无权限访问，请登录');
  //   setTimeout(() => {
  //     next({
  //       path: '/login'
  //     });
  //   }, 500);
  //   return;
  // }
  next();
}

export function routerAfterEachFunc(to) {
  // 页面跳转触发事件给app.vue，用于计算导航信息
  gGlobal.vbus.$emit('router.update', to.path);
}
