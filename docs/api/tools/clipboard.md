# 复制粘贴

#### 复制

copy(val: T)

+ `val` 复制内容

::: details 点击查看
@[code{9-30} ts](@/src/utils/clipboard.ts)
:::

+ 例子：

```ts
this.$mk.utils.clipboard.copy({name: 'mankeung'})
```

#### 粘贴

shear()

::: details 点击查看
@[code{32-52} ts](@/src/utils/clipboard.ts)
:::

+ 例子：

```ts
this.$mk.utils.clipboard.shear().then(val => {
    console.log(`复制的内容：${val}`)
})
```