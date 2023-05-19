(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{467:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"原始数据类型-对象类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型-对象类型"}},[s._v("#")]),s._v(" 原始数据类型 / 对象类型")]),s._v(" "),t("p",[s._v("JavScript 的类型分为两种：")]),s._v(" "),t("ul",[t("li",[s._v("原始数据类型："),t("span",{staticClass:"e-1"},[s._v("string")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("number")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("boolean")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("undefined")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("undefined")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("Symbol")]),s._v("、"),t("span",{staticClass:"e-1"},[s._v("BigInt")])]),s._v(" "),t("li",[s._v("对象类型："),t("span",{staticClass:"e-1"},[s._v("Object")])])]),s._v(" "),t("h2",{attrs:{id:"任意值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任意值"}},[s._v("#")]),s._v(" 任意值")]),s._v(" "),t("p",[s._v("任意值("),t("span",{staticClass:"e-1"},[s._v("any")]),s._v(")用来表示允许赋值为任意类型")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" hello "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seven'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nhello "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"类型推论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型推论"}},[s._v("#")]),s._v(" 类型推论")]),s._v(" "),t("p",[s._v("类型推论就是说如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。有两种情况.")]),s._v(" "),t("ol",[t("li",[s._v("声明变量时赋值，值的类型就是变量的类型")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9527")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Type 'number' is not assignable to type 'string'.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面的代码等价于:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9527")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 "),t("code",[s._v("any")]),s._v(" 类型而完全不被类型检查:")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9527")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"联合类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联合类型"}},[s._v("#")]),s._v(" 联合类型")]),s._v(" "),t("p",[s._v("联合类型(Union Types)就是表示取值可以为多种类型的一种。用 "),t("span",{staticClass:"e-1"},[s._v("|")]),s._v(" 分隔")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9527")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);