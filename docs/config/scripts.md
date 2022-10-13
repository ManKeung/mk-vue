# scripts

## pnpm install

安装项目模块依赖，此时会触发`npm`钩子，会运行`npm run prepare`。

### pnpm run prepare

初始化项目，效果如下图

![图片](/scripts/01.png)

> 根据提示选择是否需要`lint`和提交规范

#### 实现逻辑如下代码：

::: details 点击查看详情
@[code{9-79} js{56,57}](@/scripts/prepare.js)
:::

> 你可以根据自己业务需要修改逻辑代码

+ 代码提交规范，看如下代码（git钩子实现）

::: details 点击查看详情
@[code js](@/commitlint.config.js)
:::

+ 示例

```bash
git commit -m 'docs: 说明文档'
```

### 代码提交权限逻辑如下代码

::: danger 注意
本项目中默认要权限验证，如不需要看下方取消方法。
:::

::: details 点击查看详情
@[code{9-72} js{33}](@/scripts/precommit.js)
:::

上面代码`33`你可以发请求到后端拿去用户权限，逻辑可以根据自己业务修改，此处只做简单处理。

+ 示例如下图

![图片](/scripts/03.png)

#### 不需要代码提交权限校验

1. 去掉`/scripts/prepare.js`下代码如下：

```diff
- let npm = `${name} run precommit` // 56
+ let npm = ''
- if (answer.q1) npm += `&& ${name} run lint` // 57
+ if (answer.q1) npm += `${name} run lint`
```

2. 去掉`package.json`里的`scripts`

```diff
- "precommit": "node ./scripts/precommit.js",
```

3. 运行`pnpm install`

## pnpm dev

启动项目开发模式

+ 开发环境配置如下代码：

::: details 点击查看详情
@[code ini](@/.env.dev)
:::

+ 例子：

```ts
console.log(import.meta.env.VITE_APP_ENV) // 'dev'
```

> 可以根据自己业务需要添加配置

## pnpm build:test

测试环境打包

+ 测试环境配置如下代码：

::: details 点击查看详情
@[code ini](@/.env.test)
:::

## pnpm build

生产环境打包

+ 生产环境配置如下代码：

::: details 点击查看详情
@[code ini](@/.env.prod)
:::

## pnpm preview

预览打包项目

## 代码规范

```bash
# eslint
pnpm lint:eslint
# 格式规范
pnpm lint:prettier
pnpm prettier
# 样式规范
pnpm lint:style
```

## pnpm lint

代码规范校验

## pnpm prepare

安装依赖npm钩子

## pnpm precommit

提交权限规范

## pnpm war

打包`./dist`为`war`包

+ 逻辑代码如下：

::: details 点击查看详情
@[code{9-16} js](@/scripts/war.js)
:::

> war包名字看`packages.json`，`warName`默认为`vite`，可以自定义。

## pnpm new

新建模板，具体实现请看`plopfile.js`与模板文件`/templates/**`。

效果如下图：

![图片](/scripts/02.png)

## [VuePress](https://v2.vuepress.vuejs.org/zh/)

### pnpm docs:dev

文档开发模式

### pnpm docs:build

文档打包

### 去掉文档

1. 删除`docs`文件目录
2. `package.json`去掉依赖如下：

```diff
- @vuepress/plugin-register-components
- @vuepress/plugin-search
- vuepress
- vuepress-plugin-copy-code2
```
