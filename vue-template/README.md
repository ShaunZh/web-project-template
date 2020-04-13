## 注意事项

- 在 Vue-router 3.1 之后，\$router.push()方法改为了 Promise。所以假如没有回调函数，错误信息就会交给全局的路由错误处理，因此就会报出: `NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}`错误，可通过在`$router.push().catch(err => console.error(err.message))`解决
- keep-alive 处理：
  1. 当进入到需要缓存的页面时，将该页面路由信息中的 name 添加到 vuex 中 ui module 的 keepAliveRoute 中，同时设置其 key 值
  2. 当从 keep-alive 页面进入非 keep-alive 的页面时，需要根据 deepth 来判断是否为同级页面还是其子页面，如果是同级页面，则将当前页面的 name 从 keepAliveRoute 中删除
  3. 为什么这么处理？ 这样只需要在 created 中进行数据初始化
  4. 为什么将处理路由的信息放到 layouts/components/AppMain.vue 中处理，是因为当项目启动展示的第一个页面为 keep-alive 时，无法在页面渲染之前检测到路由地址的更新，导致页面没有被缓存，需要通过重新进入当前页面来缓存
