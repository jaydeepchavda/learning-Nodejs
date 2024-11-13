const fs= require('fs');

const http = require('http');
const url = require('url');

// server
const server = http.createServer((req,res)=>{
    const pathName = req.url;

    if(pathName === '/' || pathName === "/overview" ){
        res.end("This is the overview page");
    }
    else if(pathName === '/product'){
        res.end('This is the product page');
    }else{
        res.end("This is Error page .......");
    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("server listening at port 8000");
});