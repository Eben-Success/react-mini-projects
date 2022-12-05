// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


const names = require('./4-names')
const sayHi = require('./5-util')
const {eben, john} = require("./4-names");
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

// console.log(data)
// console.log(names)
sayHi(john)
sayHi(eben)

