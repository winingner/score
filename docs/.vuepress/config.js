
import { defaultTheme } from 'vuepress'
export default {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '用于记录知识',
    locales: {
      '/': {
        lang: 'en-US',
        title:'个人站点'
      },
      '/zh/': {
        lang: 'zh-CN',
        title:'你好'
      },
    },
    // 默认主题配置
    theme: defaultTheme({
      // 头像
      logo: '/assets/images/bear.webp',
      locales: {
        '/': {
          selectLanguageName: 'English',
        },
        '/zh/': {
          selectLanguageName: '简体中文',
        },
      },
      // 头部导航
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
          text:'知识网站',
          link:'/goods/'
        },
      ],
      colorMode:'auto',
      colorModeSwitch:true,
      home:'/',
      selectLanguageText:'语言',
      selectLanguageAriaLabel:'',
      // 侧边栏
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
