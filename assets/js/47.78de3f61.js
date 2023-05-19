(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{468:function(s,a,t){"use strict";t.r(a);var e=t(2),v=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。")]),s._v(" "),a("h2",{attrs:{id:"新语法索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新语法索引"}},[s._v("#")]),s._v(" 新语法索引")]),s._v(" "),a("ul",[a("li",[a("span",{staticClass:"e-1"},[s._v("declare var")]),s._v(" 声明全局变量")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare function")]),s._v(" 声明全局方法")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare class")]),s._v(" 声明全局类")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare enum")]),s._v(" 声明全局枚举类型")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare namespace")]),s._v(" 声明（含有子属性的）全局对象")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("interface 和 type")]),s._v(" 声明全局类型")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("export")]),s._v(" 导出变量")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("export namespace")]),s._v(" 导出（含有子属性的）对象")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("export default")]),s._v(" ES6 默认导出")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("export =")]),s._v(" commonjs 导出模块")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("export as namespace")]),s._v(" UMD 库声明全局变量")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare global")]),s._v(" 扩展全局变量")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("declare module")]),s._v(" 扩展模块")]),s._v(" "),a("li",[a("span",{staticClass:"e-1"},[s._v("/// <reference />")]),s._v(" 三斜线指令")])]),s._v(" "),a("h2",{attrs:{id:"什么是声明语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是声明语句"}},[s._v("#")]),s._v(" 什么是声明语句")]),s._v(" "),a("p",[s._v("声明语句就是告诉"),a("code",[s._v("ts")]),s._v(",它是什么")]),s._v(" "),a("p",[s._v("假如我们想使用第三方库jQuery，一种常见的方式是在 html 中通过"),a("code",[s._v("<script>")]),s._v("标签引入jQuery，然后就可以使用全局变量"),a("code",[s._v("$")]),s._v("或"),a("code",[s._v("jQuery")]),s._v("了，但是在"),a("code",[s._v("ts")]),s._v("中,编辑器并不知道"),a("code",[s._v("$")]),s._v("或"),a("code",[s._v("jQuery")]),s._v("是什么东西，这时，我们需要使用"),a("code",[s._v("declare var")]),s._v("来定义它的类型")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("jQuery")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("jQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"什么是声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是声明文件"}},[s._v("#")]),s._v(" 什么是声明文件")]),s._v(" "),a("p",[s._v("通常我们会把声明语句放到一个单独文件("),a("code",[s._v("jQuery.d.ts")]),s._v(")中，这就是声明文件")]),s._v(" "),a("p",[s._v("⚠️ 声明文件必须以 "),a("span",{staticClass:"e-1"},[s._v(".d.ts")]),s._v(" 为后缀")]),s._v(" "),a("p",[s._v("一般来说，typescript 会解析项目中所有的 "),a("code",[s._v("*.ts")]),s._v(" 文件，当然也包含以 "),a("code",[s._v(".d.ts")]),s._v(" 结尾的文件。所以当我们将 "),a("code",[s._v("jQuery.d.ts")]),s._v(" 放到项目中时，其他所有 "),a("code",[s._v("*.ts")]),s._v(" 文件就都可以获得 jQuery 的类型定义了")]),s._v(" "),a("p",[s._v("假如仍然无法解析，那么可以检查下 "),a("code",[s._v("tsconfig.json")]),s._v(" 中的 "),a("code",[s._v("files")]),s._v("、"),a("code",[s._v("include")]),s._v(" 和 "),a("code",[s._v("exclude")]),s._v(" 配置，确保其包含了 "),a("code",[s._v("jQuery.d.ts")]),s._v(" 文件。")]),s._v(" "),a("h3",{attrs:{id:"第三方声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方声明文件"}},[s._v("#")]),s._v(" 第三方声明文件")]),s._v(" "),a("p",[s._v("一般第三方声明文件可以直接下载就使用，因为社区已经帮我们定义好了")]),s._v(" "),a("p",[s._v("推荐的使用方式是使用"),a("code",[s._v("@types")]),s._v("统一管理第三方库的声明文件")]),s._v(" "),a("p",[a("code",[s._v("@types")]),s._v(" 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @types/jquery --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=v.exports}}]);