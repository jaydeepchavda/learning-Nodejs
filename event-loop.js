const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();


setTimeout(()=>console.log('Timer 1 has finished '),  0);

setImmediate(()=>console.log('Immediate 1 has finished'));

fs.readFile(`${__dirname}/txt/input.txt`, 'utf-8', ()=>{
    console.log("I/O 1 finished --- reading file ");
    console.log("------------------------")

})
fs.readFile(`${__dirname}/txt/input.txt`, 'utf-8', ()=>{
    console.log("I/O 2 finished --- reading file ");
})
setTimeout(()=>console.log('Timer 2 has finished '),  0);

setTimeout(()=>console.log('Timer 3 has finished '),  3000);

setImmediate(()=>console.log('Immediate 2 has finished'));

setTimeout(()=>console.log('Timer 4 has finished '),  4000);

process.nextTick(()=>console.log("process.nextTick"));

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
})
console.log("hello from the top level code");