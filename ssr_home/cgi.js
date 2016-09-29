"use strict";
/**
 * 数说故事官网
 */

process.env.VUE_ENV = 'server'

const fs = plug('fs');
const path = plug('path');
const resolve = file => path.resolve(__dirname, file);
const serialize = plug('serialize-javascript');
const createBundleRenderer = plug('vue-server-renderer').createBundleRenderer
const html = (() => {
  const template = fs.readFileSync(resolve('./index.html'), 'utf-8');
  const i = template.indexOf('{{ APP }}');
  const style = '<link rel="stylesheet" href="http://static.datastory.com.cn/business/home/styles.css">'
  // const style = '';

  return {
    head: template.slice(0, i).replace('{{ STYLE }}', style),
    tail: template.slice(i + '{{ APP }}'.length)
  }
})()
let renderer;
function createRenderer(bundle) {
  return createBundleRenderer(bundle, {
    cache: plug('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

const bundlePath = resolve('../../../dist/business/home/server-bundle.js');
renderer = createRenderer(fs.readFileSync(bundlePath, 'utf-8'));

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

exports.index = function(ctx,next,plug) {
  // jump koa return
  ctx.respond = false;
  ctx.res.writeHead(200, {'Content-Type': 'text/html'});


  let res = ctx.res;
  let req = ctx.req;

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
    res.write(chunk)
  })

  renderStream.on('end', ()=>{
    res.end(html.tail)
    console.log(`whole request; ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    throw err
  })
}
