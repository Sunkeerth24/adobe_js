console.log("Server Successfully Started");
var express = require('express');

var app = express();
app.use(express.static(__dirname))

// app.get('/',function(req,res){
//     res.send("index.html");
// });

var server = app.listen(8000,function(){});