export const themeData = JSON.parse("{\"logo\":\"/assets/images/bear.webp\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"},\"/zh/\":{\"selectLanguageName\":\"简体中文\"}},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"内容页\",\"link\":\"/guide/\"},{\"text\":\"知识网站\",\"link\":\"/goods/\"}],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"home\":\"/\",\"selectLanguageText\":\"语言\",\"selectLanguageAriaLabel\":\"\",\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"collapsible\":true,\"children\":[\"/guide/README.md\",\"/guide/getting-started.md\"]}],\"/reference/\":[{\"text\":\"Reference\",\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]}]},\"docsRepo\":\"https://gitlab.com/owner/name\",\"docsBranch\":\"master\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/-/edit/:branch/:path\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"notFound\":[\"页面丢失啦\"],\"backToHome\":\"回到首页\",\"toggleColorMode\":\"换肤\",\"repo\":null,\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
