---
title: "this对象的理解"
---

## 定义

`Javascript`中的<span class="e-1">this</span>关键字表示当前函数执行的上下文对象，它指向一个对象(运行时自动生成的一个内部对象)，这个对象通常是函数调用时所在的对象(称之为函数上下文)。

<span class="e-1">this</span>可以在函数内部使用，并且它的指向是根据函数的调用方式动态确定的，因此在不同的上下文，<span class="e-1">this</span>所指向的对象也是不同的。

<span class="e-1">this</span>在函数执行过程中，一旦确定则无法更改

## this 指向的几种情况

1. 全局上下文的<span class="e-1">this</span>指向全局对象
    - 浏览器为<span class="e-1">window</span>对象
    - Node.js中为<span class="e-1">global</span>对象
2. 函数作为对象的方法被调用时，函数上下文的<span class="e-1">this</span>指向该对象

```js
var obj = {
  a: 1,
  f: function() {
    console.log(this.a);
  }
}

obj.f(); // 输出 1
```

3. 通过<span class="e-1">call</span>、<span class="e-1">apply</span>、<span class="e-1">bind</span>等方法来改变函数执行时的<span class="e-1">this</span>指向

```js
var obj1 = { name: 'obj1' };
var obj2 = { name: 'obj2' };

function sayHello() {
  console.log('Hello, ' + this.name);
}

// this 为 window
sayHello(); // 输出 Hello,

// 使用 call 方法，传递参数列表
sayHello.call(obj1, 'param1', 'param2'); // 输出：Hello, obj1

// 使用 apply 方法，传递参数数组
sayHello.apply(obj2, ['param1', 'param2']); // 输出：Hello, obj2

// 使用 bind 方法，返回新的函数
var newFunc = sayHello.bind(obj1);
newFunc(); // 输出：Hello, obj1
```

4. 在事件处理函数中，<span class="e-1">this</span> 指向触发事件的元素。

```html
<!-- 例子一 -->
<!-- 当前 this 为 window，这是因为 onClick 事件处理函数中的 this 关键字默认指向全局对象，也就是 window 对象 -->
<button onClick="console.log(this)">Click me!</button>

<!-- 例子二 -->
<button id="myButton">Click me!</button>
<script>
  var button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    console.log(this); // 输出：button 元素对象
  });
</script>
```

5. 在构造函数中，<span class="e-1">this</span> 指向当前创建的实例对象。

在构造函数中，使用<span class="e-1">this</span>关键字来引用当前创建的对象实例。当使用<span class="e-1">new</span>操作符来调用构造函数时，`Javascript`会自动创建一个新的空白对象，并将该对象赋值给<span class="e-1">this</span>关键字。在构造函数中，可以通过<span class="e-1">this</span>来添加属性和方法，并在创建对象实例时访问它们。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function() {
    console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
  }
}

var john = new Person('John', 30);
john.speak(); // 输出：My name is John, and I am 30 years old.
```

6. 在箭头函数中，<span class="e-1">this</span> 指向上一层的执行上下文，而不是函数执行时所在的上下文。

例子一

```js
const obj = {
  num: 100,
  myFunc: function () {
    console.log(this.num); // 输出：100
    const myArrowFunc = () => {
      console.log(this.num); // 输出：100
    };
    myArrowFunc();
  }
};
obj.myFunc();
```

由于  <span class="e-1">myArrowFunc</span>  是一个箭头函数，因此它继承了外层执行上下文的  <span class="e-1">this</span>  值，也就是  <span class="e-1">myFunc</span>  方法的  <span class="e-1">this</span>  值，因此输出的结果仍然是 100

例子二

```js
const obj = {
  num: 100,
  myFunc: () => {
    console.log(this.num); // undefined
  }
};
obj.myFunc();
```

在箭头函数中使用  <span class="e-1">this</span>  关键字访问  <span class="e-1">this</span>num  属性的值，由于箭头函数没有自己的  <span class="e-1">this</span>  值，所以它将继承其定义时所在的上下文，也就是全局执行环境的  <span class="e-1">this</span>  值（在浏览器中通常是  <span class="e-1">window</span>  对象）。由于此时全局的  <span class="e-1">this</span>  没有  <span class="e-1">num</span>  属性，因此输出  <span class="e-1">undefined</span> 。


## 优先级

> new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

### 隐式绑定 VS 显示绑定

```js
function foo() {
    console.log( this.a );
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2
```

### new绑定 VS 隐式绑定

```js
function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a ); // 2

obj1.foo.call( obj2, 3 );
console.log( obj2.a ); // 3

var bar = new obj1.foo( 4 );
console.log( obj1.a ); // 2
console.log( bar.a ); // 4
```

### new绑定 VS 显式绑定

```js
function foo(something) {
    this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
```