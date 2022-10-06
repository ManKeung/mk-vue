# Http请求

简单封装`axios`，支持`get`、`post`、`put`、`delete`和`patch`方法，promise 的 HTTP 库。更多查看[axios文档](https://github.com/axios/axios)

#### 基本使用

```ts
this.$mk.http.request(config)
this.$mk.http.get(url[, config])
this.$mk.http.delete(url[, config])
this.$mk.http.head(url[, config])
this.$mk.http.options(url[, config])
this.$mk.http.post(url[, data[, config]])
this.$mk.http.put(url[, data[, config]])
this.$mk.http.patch(url[, data[, config]])
```

#### 例子

@[code{89-95} ts](@/src/pages/home.vue)


![图片](/api/01.png)

#### 全局配置

@[code{9-24} ts{7-11}](@/src/http/index.ts)

#### 请求拦截

@[code{9-24} ts](@/src/http/requestInterceptors.ts)

#### 响应拦截

@[code{9-23} ts](@/src/http/responseInterceptors.ts)

#### code码

具体码值根据你项目自行修改

@[code{9-21} ts](@/src/http/code.ts)

#### 取消请求

细心的你肯定，发现在请求拦截中使用了`window._cancelHttpArr`存储`c`方便取消请求，响应拦截`axios.isCancel(error)`处理取消请求错误，具体使用工具函数会介绍。