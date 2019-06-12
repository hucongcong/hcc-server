module.exports.test = 'B'

const moduleA = require('./a')

console.log('moduleA', moduleA.test)

module.exports.test = 'BB'
