/*
 * @Date: 2020-08-23 22:52:25
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-10-15 20:47:27
 */
/*
 * @Date: 2020-08-23 22:52:25
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-24 23:56:10
 */
const appData = require('./data.json')
const path = require('path')
// const { config } = require('vue/types/umd')
const { seller, goods, ratings } = appData

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    modules: false,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('untils', resolve('src/untils'))
  },
  devServer: {
    before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  }
}
