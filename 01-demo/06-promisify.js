const fs = require('fs')

// 导入promisify
const promisify = require('util').promisify

// 把readFile方法包装成promise
const readFile = promisify(fs.readFile)

readFile('./04-buffer对象.js', 'utf8').then(res => {
  console.log(res)
})
