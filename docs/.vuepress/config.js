/*
 * @Date: 2022-11-17
 * @Desc: 配置文件的入口文件，也可以是 YML 或 toml
 */
module.exports = {
  base: '/web_dev_utils/',
  title: '《Web开发手册》',
  description: 'Just playing around',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    // 右上角导航
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' },
      //   ],
      // },
    ],
    sidebar: [
      {
        title: '业务',
        collapsable: false,
        // sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: 'IP自动挂靠方案',
            path: '/business/automatic_anchoring',
          },
          {
            title: '动态添加统计代码',
            path: '/business/addDynamically',
          },
        ],
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: [
          {
            title: '数据类型',
            path: '/javascript/base_type',
          },
          {
            title: '浅拷贝与深拷贝',
            path: '/javascript/js_copy',
          },
          {
            title: '闭包的理解',
            path: '/javascript/js_closure',
          },
          {
            title: '作用域链的理解',
            path: '/javascript/scope_chain',
          },
          {
            title: '原型与原型链',
            path: '/javascript/prototype_chain',
          },
          {
            title: 'this对象的理解',
            path: '/javascript/this',
          },
          {
            title: '执行上下文和执行栈',
            path: '/javascript/execution_context',
          },
        ],
      },
      {
        title: 'TypeScript',
        collapsable: false,
        children: [
          {
            title: '简介',
            path: '/typescript/introduction',
          },
          {
            title: '安装',
            path: '/typescript/typescript_env',
          },
          {
            title: '基础概念',
            path: '/typescript/concept',
          },
          {
            title: '接口',
            path: '/typescript/interface',
          },
          {
            title: '数组的类型',
            path: '/typescript/array',
          },
          {
            title: '函数的类型',
            path: '/typescript/func',
          },
          {
            title: '类型断言',
            path: '/typescript/assert',
          },
          {
            title: '声明文件',
            path: '/typescript/declare',
          },
        ],
      },
      {
        title: 'Vue',
        collapsable: false,
        children: [
          {
            title: 'Vue组件使用手册',
            path: '/vue/vue_component_refres',
          },
          {
            title: 'Vue展示与操作lottie动画',
            path: '/vue/vue_lottie_bottom_navigation',
          },
          {
            title: 'Nuxt.js 相关路由跳转不刷新',
            path: '/vue/vue_page_change',
          },
        ],
      },
      {
        title: 'CSS',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: 'Flex布局与问题',
            path: '/layout/origin/flex',
          },
          {
            title: 'Css超出界限左右划动',
            path: '/layout/origin/css_ul_swiper',
          },
        ],
      },
      {
        title: '交互',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          // {
          //   title: "浏览器后退监听",
          //   path: "/interact/push_state"
          // }
          '/',
        ],
      },
      {
        title: '组件',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/'],
      },
      {
        title: '事件',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: 'Scroll事件使用手册',
            path: '/event/scroll_event',
          },
          {
            title: '浏览器后退事件监听',
            path: '/event/push_state',
          },
        ],
      },
      {
        title: '数据',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: 'String类型使用手册',
            path: '/data/string_use',
          },
        ],
      },
      {
        title: '网络',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: '占位',
            path: '/network/zw',
          },
        ],
      },
      {
        title: '算法',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/'],
      },
      {
        title: '插件',
        collapsable: false,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/'],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
