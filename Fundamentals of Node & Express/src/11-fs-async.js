// asynchronous: non-locking
// synchronous: blocking

// destructing
const {readFile, writeFile} = require('fs');

// If no encoding is provided, you get a buffer

console.log('start')
readFile('./content/first.txt', 'utf-8' ,(err, result)=>{
    if (err){
        console.log(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if (err){
            console.log(err);
        }
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${result}`, (err, result)=>{
                if (err){
                    console.log(err);
                    return;
                }
                console.log(result);
                console.log('done with this task')

            })
    })
})
console.log('starting next task')