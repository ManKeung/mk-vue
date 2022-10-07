# 取消请求

取消发送的请求，你可以结合路由钩子，取消上个页面接口请求。也可以根据你自己实际业务情况调整修改。

cancel()

+ 例子：

```ts {2}
router.beforeEach((to, from, next) => {
    window.$mk.utils.cancel()
    next()
})
```