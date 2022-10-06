# 数据加密

#### 对称加解密

##### 加密

en(value: T)

+ `value` 加密数据

::: details 点击查看
@[code{9-31} ts](@/src/utils/crypto.ts)
:::

+ 例子：

```ts
const str = this.$mk.utils.crypto.en({
    name: 'mankeung'
})

console.log(str)
```

#### 解密

de(en: string)

+ `en` 待解密数据

::: details 点击查看
@[code{33-54} ts](@/src/utils/crypto.ts)
:::

+ 例子：

```ts
const str = this.$mk.utils.crypto.en({
    name: 'mankeung'
})

const newStr = this.$mk.utils.crypto.de(str)
console.log(newStr)
```