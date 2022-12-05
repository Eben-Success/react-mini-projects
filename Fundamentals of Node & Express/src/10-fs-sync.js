// asynchronous: non-locking
// synchronous: blocking

// destructing
const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// Read file using utf-8 encoding.
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');


// write to a file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}, {flag: 'Add this to the file. I used the flag in node to do this.'}`);
console.log('done with this task')
console.log('starting the next one')
// Append to existing file

// console.log(first);
// console.log(second);