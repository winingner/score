
import { defaultTheme } from 'vuepress'
export default {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    locales: {
      '/': {
        lang: 'en-US',
        title:'hello'
      },
      '/zh/': {
        lang: 'zh-CN',
        title:'你好'
      },
    },
    theme: defaultTheme({
      locales: {
        '/': {
          selectLanguageName: 'English',
        },
        '/zh/': {
          selectLanguageName: '简体中文',
        },
      },
      // 默认主题配置
      navbar: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '内容页',
          link:'/guide/'
        },
        {
          text:'商品页',
          link:'/goods/'
        },
        // NavbarGroup
        {
          text: '组',
          children: ['/group/foo.md', '/group/bar.md'],
        },
         // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
      ],
      colorMode:'auto',
      colorModeSwitch:true,
      home:'/',
      logo: 'https://vuejs.org/images/logo.png',
      // repo: 'https://gitlab.com/foo/bar',
      // repoLabel:'地址',
      selectLanguageText:'语言',
      selectLanguageAriaLabel:'',

      sidebar: {
        '/guide/': [
          {
            text: 'Guide',
            collapsible: true,
            children: ['/guide/README.md', '/guide/getting-started.md'],
          },
        ],
        '/reference/': [
          {
            text: 'Reference',
            children: ['/reference/cli.md', '/reference/config.md'],
          },
        ],
      },
      docsRepo: 'https://gitlab.com/owner/name',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/-/edit/:branch/:path',
      lastUpdated:true,
      lastUpdatedText : 'Last Updated',
      // tip:'TIP'
      notFound : ['页面丢失啦'],
      backToHome : '回到首页',
      toggleColorMode: '换肤'
    }),
  }
