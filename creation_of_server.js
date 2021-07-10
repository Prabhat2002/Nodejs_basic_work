
const http = require('http')
const server=http.createServer(function(req,res)
{
    res.write("welcome to server")
    res.end()
})

server.listen(8080,function(error) 
{
   if(error)
      console.log("Something went wrong");
   else
       console.log("hello Prabhat welcome to the server on port 8080")   
});