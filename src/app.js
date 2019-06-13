const http = require('http')

const { blue, green } = require('chalk')
const conf = require('./config')
const router = require('./router')

const server = http.createServer()

const openUrl = require('./utils/openUrl')

class Server {
  constructor(config) {
    this.config = Object.assign({}, conf, config)
  }

  start() {
    const { port, host } = this.config
    server.on('request', (req, res) => {
      // 处理响应
      router(req, res, this.config)
    })

    server.listen(port, host, () => {
      const addr = `http://${host}:${port}/`
      console.log(blue('cc的提示：') + '服务器启动成功了！')
      console.log(blue(`访问地址：`) + green(addr))
      openUrl(addr)
    })
  }
}

module.exports = Server
