const http = require('http')

const { blue, green } = require('chalk')
const { hostname, port } = require('./config')
const router = require('./router')

const server = http.createServer()

server.on('request', (req, res) => {
  // 处理响应
  router(req, res)
})

server.listen(port, hostname, () => {
  console.log(blue('cc的提示：') + '服务器启动成功了！')
  console.log(blue(`访问地址：`) + green(`http://${hostname}:${port}/`))
})
