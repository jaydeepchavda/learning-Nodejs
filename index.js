const fs = require('fs');
// blocking - synchronous code
// reading file synchronous blocking code
const readText = fs.readFileSync('./txt/input.txt','utf-8');
console.log(readText);

const textOut = `this is what we know about the avacado: ${readText}. \nCreated on ${Date.now()}`;
console.log(textOut);


// writting file synchrounous blocking code
fs.writeFileSync('./txt/output.txt', textOut);
console.log("file written!");

// non blocking asynchronous code

fs.readFile('./txt/input.txt','utf-8', (err,data) => {
    console.log(data, `${Date.now()}`);
    fs.writeFile('./txt/outputAsync.txt' , `${data}`, 'utf-8', err =>{
        console.log("this file has been writter")
    });
});


console.log("asynchronous hello world first print")