const fs=require('fs');
const data=fs.readFileSync("create.html","utf-8");
console.log(data);
fs.writeFileSync("Ravi.html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <style>
        div
        {
            font-size: 25px;
            color: indigo;
        }
        body
        {
            background-color: rgb(55, 12, 209);
        }
        a
        {
            text-decoration: none;
            border-radius: 15px;
            border: 5px solid white;
            background-color: rgb(0, 9, 128);
            font-size: 20px;
            color: rgba(2, 179, 185, 0.692);
            padding: 8px 8px;
        }
    </style>
</head>
<body>
    <!-- <center><img src="prabhat.jpg"></center> -->
    <div>
       This Game  is all about to test how accurate guesser you are.
       ...........
    </div>
    <center><a href="First.html">Back</a></center>
</body>
</html>`);
