const http=require('http')
const fs=require('fs')
let data=fs.readFileSync("intro.html")
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"})
    res.end(data)
})

server.listen(8000,'0.0.0.0',(err)=>{
    console.log("Server Listening");
    console.log(err);
})
// http://localhost:8000/

