const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/istaging-interview/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
      title: ' Tree 圖書館 🏛',
    },
  }
})
