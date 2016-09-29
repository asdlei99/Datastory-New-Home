# DataStory Home

> 数说故事新官网 ssr version

### For Development:
开发时，项目运行在 webpack-dev-server 上面，可以热加载和自动更新页面，所有依赖自动注入 /index.html中，访问 localhost:8080/ 即可
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

### For Project Distribution
项目发布时，所有静态资源来自 http://static.datastory.com.cn ，即映射到 ds-front-app/dist 目录下，index.html 位于 /pages 目录，此时采用的是datastory的 node server，需访问 http://www.datastory.com.cn
```bash
# build for production with minification
npm run build

npm start
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
