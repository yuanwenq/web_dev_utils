---
title: "Nuxt.js 相同路由跳转不刷新"
tags:
- Vue
- Nuxt
---

``` js
export default {
  watchQuery: ['page'],
  key(route) {
    return route.fullPath;
  },
}
```

## 参考

- [watchQuery 属性](https://www.nuxtjs.cn/api/pages-watchquery)