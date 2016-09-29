const path = require('path')

module.exports = {
  dev_env: {
    outputPath: path.resolve(__dirname, '../dist/'),
    publicPath: '/dist/'
  },
  production_env: {
    outputPath: path.resolve(__dirname, '../../../../dist/business/home/'),
    publicPath: 'http://static.datastory.com.cn/business/home/',
  }
}