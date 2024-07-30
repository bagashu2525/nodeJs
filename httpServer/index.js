const http = require("http");

const server = http.createServer((request,response)=>{
    if(request.url=='/'){
        response.end(`<h1> the url is home route</h1>`)
    }
    else if(request.url=='/product'){
            response.end(`<h1> this is a product second version</h1>`)
    }
    else{
        response.writeHead(404,{"Content-type":"text/html"});
         response.end("<h1>404 not found</h1>")
    }
    // response.end("Hello world");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000 : http://localhost:8000")
});