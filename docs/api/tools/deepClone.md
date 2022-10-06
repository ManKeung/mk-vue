# 深拷贝

deepClone(target: T)

+ `target` 拷贝内容

::: details 点击查看
@[code{9-46} ts](@/src/utils/deepClone.ts)
:::

+ 例子：

```ts
const obj = this.$mk.utils.deepClone({
    name: 'mankeung'
})

console.log(obj)
```