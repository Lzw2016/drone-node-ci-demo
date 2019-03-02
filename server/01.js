/* eslint-disable */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(9066);
console.log('服务启动成功 -> 9066')
