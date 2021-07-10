const http = require('http');
const fs=require('fs');
const host_name = "localhost";
const port = 8080;
const server = http.createServer((req,res) => {
  res.writeHead(200,{'Context-Type':'text/html'});
  fs.readFile('./create.html',null,(error,data)=>
  {
     if(error)
     {
         res.writeHead(404);
         res.write("Oops! File Not found");
     }
     else
     {
         res.write(data);
     }
     res.end();
  });
})

server.listen(port, function (error) {
    if (error)
        console.log("Something went wrong");
    else
        console.log("hello Prabhat welcome to the server on port 8080")
});