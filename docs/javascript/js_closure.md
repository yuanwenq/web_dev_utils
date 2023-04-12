---
title: "闭包的理解"
---

## 闭包是什么

一个函数和对其周围状态的引用捆绑在一起，这样的组合就是闭包。

闭包有权访问另一个函数作用域中的变量的函数，即使这个函数离开了声明的作用域也能够引用这些变量。

在`Javascript`中，每当创建一个函数，闭包就会在函数创建的同时被创建出来，作为函数内部与外部连接起来的一座桥梁。

在`Javascript`中，每个函数都会创建自己的作用域，当函数执行完毕之后，这个作用域会被销毁。但是如果在函数内部再定义一个函数，那么这个内部函数就可以访问外部函数的变量，形成一个闭包。

```js
// 例子一
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();

// 例子二
function outer() {
  var x = 5;
  return function inner() {
    console.log(x);
  };
}

var innerFunc = outer(); // 这里调用outer函数返回一个inner函数
innerFunc(); // 这里调用inner函数，输出5
```

## 闭包的使用场景

任何闭包的使用场景都离不开这两点：

- 创建私有变量
- 延长变量的生命周期

> 一般函数的词法环境在函数返回后就被销毁，但是闭包会保存对创建时所在词法环境的引用，即便创建时所在的执行上下文被销毁，但创建时所在的词法环境依然存在，以达到延长变量的生命周期的目的

使用场景：
- 实现私有变量和方法
- 实现函数柯里化
- 实现函数记忆
- 避免循环引用问题
- 用于模块化开发，将一系列函数和变量封装在一个闭包中，避免全局命名冲突

### 实现私有变量和方法

可以有效地保护数据的安全性，避免了全局命名空间的污染和数据的篡改。这种方式也叫模块方式。

```js {3-5}
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

两个计数器`Counter1`和`Counter2`是维护它们各自的独立性的，每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境，不会影响另一个闭包中的变量。

如计数器、延迟调用、回调等闭包的作用，其核心思想还是创建私有变量和延长变量的生命周期。`让它能在程序中待得久一点`

### 柯里化函数

柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用

```js
// 假设我们有一个求长方形面积的函数
function getArea(width, height) {
    return width * height
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea(width) {
    return height => {
        return width * height
    }
}

const getTenWidthArea = getArea(10)
// 之后碰到宽度为10的长方形就可以这样计算面积
const area1 = getTenWidthArea(20)

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea(20)
```

## 注意事项

如果不是某些特定任务需要使用闭包，在其他函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响

:warning: 具体要注意的点

1. 内存泄露问题：闭包会使得外部函数的变量一直存在于内存中，直到内部函数被销毁才能被销毁。
    - 当闭包不再被使用时，Javascript 会自动进行垃圾回收
    - 当闭包中的引用被删除或者闭包对象被赋值为null
    - 当闭包引用的外部变量太多或者占用内存太大，Javascript 引擎也可能会主动进行垃圾回收来释放闭包占用的内存
2. 变量访问冲突：闭包可以访问外部函数的变量，如果多个闭包访问同一个变量，可能会引起访问冲突，导致不可预期的结果
3. 性能问题：闭包对于性能有一定的影响，因为闭包需要保存外部函数的作用域，所以会占用更多的内存和CPU时间。
4. 作用域链的问题：闭包会使得作用域链变得更长，因此在使用闭包时需要注意变量的作用域和访问顺序，避免出现作用域链混乱的情况
5. 安全问题：闭包可以访问外部函数的变量，可能导致信息泄露和安全问题，因此需要谨慎使用闭包。