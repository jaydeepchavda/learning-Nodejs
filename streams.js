const fs = require('fs');

const server = require('http').createServer();


server.on('request', (req, res)=>{
    // // solution 1
    // fs.readFile('./txt/input.txt',(err,data)=>{
    //     if(err) console.log(err)
    // console.log("reading file")
    //     res.end(` <h1>${data}</h1>`);
    // })
   

    // solution 2
    // const readableStream = fs.createReadStream('./txt/input.txt');

    // readableStream.on('data', chunk=>{
    //     res.write(chunk);
    // });
    // readableStream.on('close', ()=>{
    //     res.end("end file");
    // })
    // readableStream.on('error', err=>{
    //     console.log(err);
    //     res.statusCode= 500;
    //     res.end('file not found');
    // })

    const readable = fs.createReadStream('./txt/input.txt');

    readable.pipe(res);
    // readableSource.pipe(writableDestination);
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening..........")
})