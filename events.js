const EventEmmiter = require('events');
const http = require('http')

const myEmitter = new EventEmmiter();


myEmitter.on('newSale', ()=>{
    console.log('There was a new sale! ');
})

myEmitter.on('newSale', () =>{
    console.log("Customer Name: Jonas");
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in the stock`)
})

myEmitter.emit('newSale',8);

const server = http.createServer();

server.on('request' , (req, res) =>{
    console.log('request received ! 1');
    res.end('request received ');
})

server.on('request' , (req, res) =>{
    console.log('Another request 👌');
})

server.on('close' , ()=>{
    console.log('server closed')
})


server.listen(8000, '127.0.0.1', ()=>{
    console.log("waiting for requests .....");
})