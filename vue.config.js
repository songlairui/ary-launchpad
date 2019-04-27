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
        modifyVars: {
          'primary-color': '#bd2779',
          'link-color': '#bd2779'
        },
        javascriptEnabled: true
      }
    }
  }
}
