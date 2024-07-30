const http = require("http");

const server = http.createServer((request,response)=>{
    response.end("Hello world");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000")
});