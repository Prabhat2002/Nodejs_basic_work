var fs =require('fs');

// fs.readFile('export.js','utf8',function(err,data)
// {
//    console.log(data); 
// }
// )
/* fs.writeFile('create.js','console("Hello Prabhat")',() => {
         console.log("Created File hurrrayyyyy !!");
     })*/

    fs.unlink('create1.js',() => {
        console.log("DELETED!!");
    })
