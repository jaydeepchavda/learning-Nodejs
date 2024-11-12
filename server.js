const fs= require('fs');

const http = require('http');

// server
const server = http.createServer((req,res)=>{
    res.end("hello from the server ....");
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("server listening at port 8000");
});