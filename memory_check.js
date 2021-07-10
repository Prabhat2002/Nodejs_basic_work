const find=require('os');
let TM= find.totalmem();
let FM= find.freemem();
var TD=TM%(1024*1024);
TM=TM-TD;
var FD=FM%(1024*1024);
FM=FM-FD;
console.log("Total Memory : "+TM/(8*1024*1024)+" GB");
console.log("Free Memory : "+FM/(8*1024*1024)+" GB");

