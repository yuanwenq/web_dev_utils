---
title: "css实现内容宽度超出界限左右滑动且不显示滑动条"
---

## 代码

index.html
``` html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
</ul>
```
indes.css
``` css
.ul {
  white-space: nowrap; // 禁止换行
  overflow-x: scroll;  // 启动左右划动
  scrollbar-width: none; // Firefox 隐藏滚动条
  -ms-overflow-style: none; // IE 10+ 隐藏滚动条

  .li {
    margin-right: px2(20px);
    width: px2(560px);
    display: inline-block; // 行级块元素,避免独占一行
  }
}

.ul::-webkit-scrollbar {
  display: none; // Chrome & Safari
}
```