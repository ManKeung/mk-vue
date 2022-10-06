# 代码规范

::: tip 注意
这里不做详细配置说明，你可以查看之前文章[前端代码工作流](https://mankeung.github.io/docs/mk-data/tools_article/23.html)、[从 0 到 1 搭建一个企业级前端开发规范](https://mankeung.github.io/docs/mk-data/tools_article/23.html)了解。
:::

## EditorConfig

### .editorconfig

::: details 点击查看详情
@[code ini](@/.editorconfig)
:::

### .vscode/settings.json

@[code json{2}](@/.vscode/settings.json)

## eslint

### 安装

```bash
pnpm add eslint eslint-config-standard eslint-plugin-vue -D
```

### .eslintrc.js

::: details 点击查看详情
@[code js](@/.eslintrc.js)
:::

### .eslintignore

::: details 点击查看详情
@[code ini](@/.eslintignore)
:::

### npm命令配置

@[code{28-28} json](@/package.json)

## stylelint

### 安装

```bash
pnpm add stylelint stylelint-config-html stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss postcss-html postcss-scss -D
```

### .stylelintrc.js

::: details 点击查看详情
@[code js](@/.stylelintrc.js)
:::

### .stylelintignore

::: details 点击查看详情
@[code ini](@/.stylelintignore)
:::

### npm命令配置

@[code{29-30} json](@/package.json)

## prettier

### 安装

```bash
pnpm add prettier --dev
```

### .prettierrc.js

::: details 点击查看详情
@[code js](@/.prettierrc.js)
:::

### npm命令配置

@[code{30-30} json](@/package.json)

## husky

### 安装

```bash
pnpm add husky @commitlint/cli @commitlint/config-conventional
```

### commitlint.config.js

::: details 点击查看详情
@[code js](@/commitlint.config.js)
:::

### scripts/prepare.js

::: details 点击查看详情
@[code js](@/scripts/prepare.js)
:::

### npm命令配置

@[code{33-33} json](@/package.json)]