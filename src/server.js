
/* eslint-disable */
// 命令行参数处理
const program = require('commander');
program
  .version('0.0.1', '-v, --version')
  .option('-H, --host [host]', '监听IP地址', '0.0.0.0')
  .option('-P, --port [port]', '监听端口号', '3000')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ custom-port -P 9066');
  })
  .parse(process.argv);

// 启动服务
const start = Date.now();
require('babel-register');
console.log('服务启动中...');
const app = require('./app.js').default;
app.listen(program.port, program.host, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`监听地址 -> [${program.host}:${program.port}]`);
  const startedTime = Date.now() - start;
  console.log(`服务启动成功,耗时[${startedTime}]ms`);
});
