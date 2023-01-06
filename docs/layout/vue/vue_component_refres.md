---
title: "Vue 组件使用手册"
tags:
- Vue
- Component
---

## Question

### 子组件重新渲染

应用情景: 在当前路由中点击触发数据变换,子组件数据重新渲染,但无效的情况下。这里涉及了虚拟DOM,渲染树的相关知识。

<p class="code-block-bg">TODO: 后续需要补充</p>

:blush: 解决方案,为子组件添加一个动态`key`
``` vue
<template>
  <ChildComponent :key="timer" />
</template>

<script>
  data() {
    return {
      timer: new Date().getTime()
    }
  },
  methods: {
    changeData() {
      ...
      this.timer = new Date().getTime();
    }
  }
</script>
```


## 参考
- [Vue 组件基础](https://cn.vuejs.org/guide/essentials/component-basics.html#passing-props)
- [vue父组件数据更新，子组件重新渲染问题](https://juejin.cn/post/7065578037756035103)