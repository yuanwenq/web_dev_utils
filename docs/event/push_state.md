---
tags:
- Event
---

## popState

```javascript
//监听浏览器后退事件
window.addEventListener(
  "popstate",
  function(e) {
    // do something
  },
  false
);

// 清空浏览器历史记录
let state = {
  title: "title",
  url: "#"
};
window.history.pushState(state, "title", "#");
```

## 注意

1. 在chrome浏览器中只有手动在页面中进行交互操作(点击元素,滑动页面等)后再点击浏览器的后退按钮才能触发`popState`事件
2. Safari 浏览器没有这个问题

## 参考
- [使用pushState,点击浏览器后退按钮 chrome 不会触发popstate事件分析](https://segmentfault.com/a/1190000041741475)