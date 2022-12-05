// asynchronous: non-locking
// synchronous: blocking

// destructing
const {readFileSync, writeFileSync} = require('fs');

// Read file using utf-8 encoding.
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// write to a file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);

console.log(first);
console.log(second);