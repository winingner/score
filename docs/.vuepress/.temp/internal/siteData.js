export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"你好， VuePress ！\",\"description\":\"用于记录知识\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"个人站点\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"你好\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
