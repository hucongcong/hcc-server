// 多次加载模块 nodejs会对加载的模块进行缓存，即只会加载一次
// 如果一个模块被循环加载，就只会输出已经自行的部分，还没执行的部分不会输出
const a = require('./a')
const b = require('./b')
console.log(a.test)
console.log(b.test)
