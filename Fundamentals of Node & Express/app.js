const names = require('./names')
const sayHi = require('./util')
const {eben, john} = require("./names");
const data = require('./alternative-flavor')

console.log(data)
console.log(names)
console.log(sayHi(john))
console.log(sayHi(eben))