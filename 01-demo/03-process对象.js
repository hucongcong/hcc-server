const { argv } = process

/*
  argv: 参数
  argv0: 第0个参数
  execArgv:命令后的参数
*/
// 参数1：执行的node的目录
// 参数2：执行的js文件目录
// 后续参数：用于获取执行的命令的后续参数
// argv.forEach(item => console.log(item))
console.log(process.env)
console.log(argv)
