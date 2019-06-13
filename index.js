const yargs = require('yargs')

const Server = require('./src/app')

const argv = yargs
  // 使用描述
  .usage('hcc-server [options]')
  // -p 或者 --port
  .option('p', {
    // 别名
    alias: 'port',
    describe: '端口号',
    default: 8080
  })
  // 版本号， 支持 -v 或者 --version
  .version()
  .alias('v', 'version')
  // 生成帮助信息 支持 --help
  .help().argv

// 启动服务器
new Server(argv).start()
