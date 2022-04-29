const { defineConfig } = require('@vue/cli-service')
const { pathStr } = require('./src/settings.js')
const defalutSettings = require('./src/settings.js')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: pathStr
})
