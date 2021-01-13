# unicloud Serverless Express
代码借鉴了serverless Express，uniCloud目前虽然支持服务器单路由模式，但扩展功能都需要自己造轮子，引入ExpressJs后可以围绕其生态做出更有意思的东西

## 安装

```bash
npm install uni-cloud-expressjs
```

## 使用

云函数demo代码

```js
const uniCloudExpress = require("uni-cloud-expressjs");
const app = require("./app");
const server = uniCloudExpress.createServer(app);
exports.main = async (event, context) => {
  //返回数据给客户端
  return uniCloudExpress.proxy(server, event, context, "PROMISE");
};
```
上面的部分即可将云函数url化之后的请求交给express框架处理

## 优化
目前使用了rollup进行代码优化，打包到dist目录，进一步降低包大小，执行：
```bash
npm run build
```


