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
        title: 'vuepress测试',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/guide/guide-1',
          '/guide/mark拓展',
          '/guide/markdown中使用vue'
        ]
      },
      {
        title: '业务',
        path: '/business/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          { 
            title: "统计代码", 
            path: "/business/statistics/",
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
          '/'
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
          '/'
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
        title: '数据',
        path: '/data/',
        collapsable: false,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
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