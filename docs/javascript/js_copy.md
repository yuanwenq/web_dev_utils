---
title: "浅拷贝与深拷贝"
---

## 资料

- [数据类型](./base_type.md)

## 浅拷贝

浅拷贝，指的是创建新的数据，这个数据有着原始数据属性指的一份精确拷贝。

对象的赋值通常是浅拷贝，即两个对象引用了同一个内存地址，当其中一个对象发生改变时，另一个对象也会受到影响。

- 基本类型：拷贝的是基本类型的值
- 引用类型：拷贝的是内存地址

浅拷贝代码：

```js
function shallowClone(obj) {
  const newObj = {};
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObk[prop] = obj[prop];
    }
  }
  return newObj;
}
```

在<span class="e-1">Javascript</span>中，存在浅拷贝的现象有：

- 对象赋值
- `Object.assign()`
- `Array.prototype.slice()`
- `Array.prototype.concat()`
- 拓展运算符实现的复制

**Object.assign**

```js
var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}
var newObj = Object.assign({}, fxObj);
```

**Array.prototype.slice**

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.slice(0)
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```

**Array.prototype.concat**

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.concat()
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```

**拓展运算符实现的复制**

```js
const fxArr = ["One", "Two", "Three"]
const fxArrs = [...fxArr]
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
```


## 深拷贝

深拷贝是完全复制一个对象，两个对象的内存地址是不同的，修改其中一个对象不会对另一个对象产生影响。

常见的深拷贝方式:

- loadsh.js 的 `_.cloneDeep()`
- `jQuery.extend()`
- `JSON.stringify()`
- 循环递归

**_.cloneDeep()**

```js
const _ = require('lodash');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f); // false
```

**jQuery.extend()**

```js
const $ = require('jquery');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); // false
```

**JSON.stringify()**

```js
const obj2=JSON.parse(JSON.stringify(obj1));
```

但是这种方式存在弊端，会忽略`undefined`、`symbol`和`函数`

```js
const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4:  Symbol('A')
}
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2); // {name: "A"}
```

**循环递归**

```js

```

## 区别