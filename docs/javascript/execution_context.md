---
title: "执行上下文和执行栈"
---

## 执行上下文

`Javascript`中的执行上下文是指代码执行时的环境，包括变量、作用域、this值等信息。每当`Javascript`引擎执行一段可执行代码时，都会创建一个新的执行上下文，并将其添加到执行上下文栈中。当当前执行上下文执行完毕后，它将被从执行上下文栈中弹出，并恢复到上一级执行上下文中继续执行代码。

### 执行上下文的类型

- 全局执行上下文: 只有一个，浏览器中的全局对象就是<span class="e-1">window</span>对象，<span class="e-1">this</span>指向这个全局对象
- 函数执行上下文: 存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
- ~~Eavl函数执行上下文: 指的是运行在 eval 函数中的代码，很少用而且不建议使用~~

![execution_context](./images/excution_context.png)

紫色框住的部分为全局上下文，蓝色和橘色框起来的是不同的函数上下文。只有全局上下文（的变量）能被其他任何上下文访问

可以有任意多个函数上下文，每次调用函数创建一个新的上下文，会创建一个私有作用域，函数内部声明的任何变量都不能在当前函数作用域外部直接访问

## 生命周期

执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 销毁阶段

### 创建阶段

当`Javascript`引擎开始执行可执行代码时，它会按照以下步骤创建执行上下文：
- 创建变量对象(VO)，包括函数参数，内部变量和函数声明等
- 创建作用域链(Scope Chain)，用于解析变量和函数引用
- 确定 this 值
- 进行"函数声明"提升(Function Hoisting) ：将代码中所有函数声明提升到当前作用域的顶部

### 执行阶段

当执行上下文创建完成后，`Javascript` 引擎开始执行可执行代码。在执行阶段，`Javascript` 引擎会按照以下步骤执行代码：
- 变量和函数会被添加到作用域中
- 代码按照顺序一行行执行
- 函数调用会创建一个新的函数执行上下文，压入执行上下文栈中。

### 销毁阶段

当执行上下文执行完毕后，`Javascript` 引擎会将其从执行上下文栈中弹出，并销毁该执行上下文。

在销毁阶段，`Javascript` 引擎会释放执行上下文中的资源，包括变量和作用域链等。

- 如果当前上下文有嵌套的函数执行上下文[(闭包)](./js_closure.md)，也会先销毁内部的执行上下文再销毁外部的执行上下文
- 如果当前上下文是全局上下文，则该上下文不会被销毁。

## 执行上下文栈

执行上下文栈也称为调用栈，是一个LIFO(后进先出)数据结构。

在`Javascript`代码执行期间，每次进入一个新的函数或全局代码时，都会创建一个新的执行上下文，并将其推入执行上下文栈的顶部。当函数执行完毕或代码执行结束时，对应的执行上下文将被弹出执行上下文栈，`Javascript`引擎将继续执行上一个执行上下文栈顶部的代码。

![execution_context_stack](./images/execution_context_stack.png)

例子：

```js
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
```

转化为图形：

![img](./images/execution_context_img.png)

分析流程

- 创建全局上下文请压入执行栈
- first函数被调用，创建函数执行上下文并压入栈
- 执行first函数过程遇到second函数，再创建一个函数执行上下文并压入栈
- second函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文first函数
- first函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文
- 所有代码执行完毕，全局上下文也会被推出栈中，程序结束