// Datastory New Home SSR Dev Server
// 2016 ZhouJihao

process.env.VUE_ENV = 'server'

const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')
const favicon = require('serve-favicon')
const serialize = require('serialize-javascript')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const app = express()

const html = (() => {
  const template = fs.readFileSync(resolve('./index.html'), 'utf-8')
  const i = template.indexOf('{{ APP }}')

  const style = isProd ? '<link rel="stylesheet" href="./dist/styles.css">':  ''
  return {
    head: template.slice(0, i).replace('{{ STYLE }}', style),
    tail: template.slice(i + '{{ APP }}'.length)
  }
})()


let renderer

function createRenderer(bundle) {
  return createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

if (isProd) {
    const bundlePath = resolve('./dist/server-bundle.js')
    renderer = createRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
  require('./build/setup-dev-server')(app, bundle => {
    renderer = createRenderer(bundle)
  })
}

function htmlDecode(str) { 
  // 一般可以先转换为标准 unicode 格式（有需要就添加：当返回的数据呈现太多\\\u 之类的时）
  str = unescape(str.replace(/\\u/g, "%u"));
  // 再对实体符进行转义
  // 有 x 则表示是16进制，$1 就是匹配是否有 x，$2 就是匹配出的第二个括号捕获到的内容，将 $2 以对应进制表示转换
  str = str.replace(/&#(x)?(\w+);/g, function($, $1, $2) {
    return String.fromCharCode(parseInt($2, $1? 16: 10));
  });

  return str;
}

app.use('/dist', express.static(resolve('./dist')))

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation...')
  }

  const s = Date.now()
  const context = {url: req.url}
  const renderStream = renderer.renderToStream(context)

  let firstChunk = true

  res.write(html.head)

  renderStream.on('data', chunk => {
    if (firstChunk) {
      if (context.initialState) {
        res.write(
          `<script>window.__INITIAL_STATE__=${
            serialize(context.initialState, { isJSON: true })
          }</script>`
        )
      }
      firstChunk = false
    }

    chunk = htmlDecode(chunk.toString());
    // console.log(chunk);
    res.write(chunk)
  })

  renderStream.on('end', ()=>{
    res.end(html.tail)
    console.log(`whole request; ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    throw err
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost: ${port}`)
})
