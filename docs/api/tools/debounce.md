# 节流防抖

#### 何谓节流和防抖？

+ 节流

节流的意思是，规定时间内，只触发一次。比如我们设定1000ms，在这个时间内，无论点击按钮多少次，它都只会触发一次。具体场景可以是抢购时候，由于有无数人 快速点击按钮，如果每次点击都发送请求，就会给服务器造成巨大的压力，但是我们进行节流后，就会大大减少请求的次数。

+ 防抖

防抖的意思是，在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。具体场景可以搜索框输入关键字过程中实时 请求服务器匹配搜索结果，如果不进行处理，那么就是输入框内容一直变化，导致一直发送请求。如果进行防抖处理，结果就是当我们输入内容完成后，一定时间(比如1000ms)没有再 输入内容，这时再触发请求。

结合以上两种情况，回到我们最实际的场景，比如防止表单提交按钮被多次触发，我们应该选择使用节流而不是防抖方案。

#### 节流

throttle(func: Function, wait = 1000, type = 2)

+ `func` 目标函数
+ `wait` 延迟时间
+ `type` 1 表时间戳版，2 表定时器版

::: details 点击查看
@[code{9-40} ts](@/src/utils/throttle.ts)
:::

+ 例子：

```ts
const handleClick = () => {
    this.$mk.utils.throttle(() => {
        console.log('点击1次')
    }, 500)
}
```

#### 防抖

debounce(func: Function, wait = 1000, immediate = false)

+ `func` 目标函数
+ `wait` 延迟执行
+ `immediate` true - 立即执行， false - 延迟执行

::: details 点击查看
@[code{9-40} ts](@/src/utils/debounce.ts)
:::

+ 例子：

```ts
const handleClick = () => {
    this.$mk.utils.debounce(() => {
        console.log('点击1次')
    }, 500)
}
```