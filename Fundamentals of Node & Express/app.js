const {readFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

console.log('Hello world');
console.log('Hello');