const fs = require('fs')
// const rs = fs.createReadStream('./04-buffer对象.js')

// rs.pipe(process.stdout)

const ws = fs.createWriteStream('./demo.txt')
const timeId = setInterval(() => {
  let num = (Math.random() * 10) | 0
  if (num < 8) {
    ws.write(num + '')
  } else {
    ws.end()
    clearInterval(timeId)
  }
})

ws.on('finish', () => {
  console.log('读取完成来')
})
