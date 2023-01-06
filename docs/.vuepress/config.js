/*
 * @Date: 2022-11-17
 * @Desc: 配置文件的入口文件，也可以是 YML 或 toml
 */
module.exports = {
  base: "/web_dev_utils/",
  title: "Web开发工具",
  description: "Just playing around",
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    // 右上角导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      {
        title: '业务',
        path: '/business/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          { 
            title: "统计代码", 
            path: "/business/statistics/",
            collapsable: false,
            children: [
              {
                title: "动态添加cnzz统计代码与百度统计",
                path: "/business/statistics/addDynamically"
              }
            ]
          },
        ]
      },
      {
        title: '布局',
        path: '/layout/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: "原生",
            path: "/layout/origin/",
            collapsable: false,
            children: [
              {
                title: "Flex布局与问题",
                path: "/layout/origin/flex"
              },
              {
                title: "Css超出界限左右划动",
                path: "/layout/origin/css_ul_swiper"
              }
            ]
          },
          {
            title: "Vue",
            path: "/layout/vue/",
            collapsable: false,
            children: [
              {
                title: "Vue组件使用手册",
                path: "/layout/vue/vue_component_refres"
              },
              {
                title: "Vue展示与操作lottie动画",
                path: "/layout/vue/vue_lottie_bottom_navigation"
              },
              {
                title: "Nuxt.js 相关路由跳转不刷新",
                path: "/layout/vue/vue_page_change"
              },
            ]
          },
        ]
      },
      {
        title: '组件',
        path: '/components/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: '交互',
        path: '/interact/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          // {
          //   title: "浏览器后退监听",
          //   path: "/interact/push_state"
          // }
          '/'
        ]
      },
      {
        title: '事件',
        path: '/event/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: "Scroll事件使用手册",
            path: "/event/scroll_event"
          },
          {
            title: "浏览器后退事件监听",
            path: "/event/push_state"
          }
        ]
      },
      {
        title: '数据',
        path: '/data/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: "String类型使用手册",
            path: "/data/string_use"
          }
        ]
      },
      {
        title: '网络',
        path: '/network/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: "占位",
            path: "/network/zw"
          }
        ]
      },
      {
        title: '动画',
        path: '/animation/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          { title: "first", path: "/business/" },
        ]
      },
      {
        title: '算法',
        path: '/algorithm/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: '插件',
        path: '/plug/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
    ]
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  }
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@images': '/docs/.vuepress/public/images/'
  //     }
  //   }
  // }
}