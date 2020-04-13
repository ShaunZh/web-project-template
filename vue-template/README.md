# Vue 移动端开发模板

## 注意事项

- 在 Vue-router 3.1 之后，`$router.push()`方法改为了 Promise。所以假如没有回调函数，错误信息就会交给全局的路由错误处理，因此就会报出: `NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}`错误，可通过在`$router.push().catch(err => console.error(err.message))`解决
- keep-alive 处理：
  1. 当进入到需要缓存的页面时，将该页面路由信息中的 name 添加到 vuex 中 ui module 的 keepAliveRoute 中，同时设置其 key 值
  2. 当从 keep-alive 页面进入非 keep-alive 的页面时，需要根据 deepth 来判断是否为同级页面还是其子页面，如果是同级页面，则将当前页面的 name 从 keepAliveRoute 中删除
  3. 为什么这么处理？ 这样只需要在 created 中进行数据初始化
  4. 为什么将处理路由的信息放到 layouts/components/AppMain.vue 中处理，是因为当项目启动展示的第一个页面为 keep-alive 时，无法在页面渲染之前检测到路由地址的更新，导致页面没有被缓存，需要通过重新进入当前页面来缓存

## 功能

- 登录/授权

  - [x] **微信授权和微信 jssdk**
  - [ ] **用户名、密码登录、注册、忘记密码**
  - [x] **权限控制**

- 列表

  - [x] **列表缓存**: 返回列表后不重新加载数据，滚动条回到原位置
  - [x] **图片懒加载**
  - [x] **上滑加载更多**
  - [ ] **下拉刷新**
  - [ ] **列表项编辑**：编辑返回列表后，局部更新
  - [ ] **列表项新增**：新增返回列表后，刷新整个列表
  - [ ] **回到顶部**

- 表单

  - [ ] 表单校验
  - [x] 文本输入
  - [x] 密码输入
  - [ ] 单选项
  - [ ] 多选项
  - [ ] 省市区选择
  - [ ] 日期时间选择
  - [ ] 图片上传
  - [ ] 文件上传
  - [ ] 视频上传/播放

- 其他
  - [ ] 播放器
  - [x] 轮播图
  - [ ] 搜索
  - [ ] 地图
  - [x] 图标
  - [x] 404 页面
  - [x] 国际化
