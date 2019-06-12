module.exports.test = 'A'

const moduleB = require('./b')

console.log('moduleB', moduleB.test)

module.exports.test = 'AA'
