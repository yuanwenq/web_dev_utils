# markdown扩展

## 表格
| Tables        |      Are      |  Cool |
|---------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## emoji表情

[emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
:tada: :100:

## 目录

[[toc]]

## 自定义容器<span style="color: #e33028;">123</span>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## 代码块中的语法高亮

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

<!-- ## 导入代码段 beta

<<< @/./code/hello.js -->