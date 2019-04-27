module.exports = {
  lintOnSave: false,

  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  }
}
