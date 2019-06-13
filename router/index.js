const fs = require('fs')
const path = require('path')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const mime = require('mime')
const template = require('art-template')

const { root } = require('../config')
// 处理路由
async function router(req, res) {
  const filePath = path.join(root, req.url)
  console.log(filePath)
  // 读取文件状态，判断是文件还是文件夹
  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      // 如果是文件
      // 设置响应头
      let contentType = mime.getType(req.url)
      if (/\.(json|js|css|html|md)/.test(req.url)) {
        contentType += ';charset=utf-8'
      }
      res.setHeader('content-type', contentType)
      // 以流的形式返回给客户端
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      // 如果是文件夹
      let files = await readdir(filePath)
      const tmlPath = path.join(__dirname, '..', 'views', 'index.html')
      files = files.map(item => {
        return {
          name: item,
          dir: path.join('/' + path.relative(root, filePath), item)
        }
      })
      const data = {
        title: path.basename(filePath),
        files
      }
      console.log(root, filePath, data.dir)
      const html = template(tmlPath, data)
      res.setHeader('content-type', 'text/html')
      res.end(html)
    }
  } catch (e) {
    // 处理404
    console.log(e)
    render404(res)
  }
}

// 响应404
function render404(res) {
  res.statusCode = 404
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('<h1>404, 你访问的资源不存在</h1>')
}

module.exports = router
