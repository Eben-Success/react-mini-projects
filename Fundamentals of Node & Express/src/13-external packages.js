// npm -global command, comes with node
// mpm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json -manifest file (stores important info about project/package)
// npm init
// npm init -y (set up default)


const _ = require('lodash');

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log("Hello World");
console.log(newItems)