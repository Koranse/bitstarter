var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {   
    
  var buf = new Buffer (256); 

var fs = require('fs');
   response.send(fs.readFileSync('index.html').toString());
//  response.send('Hello World2!');
 });
var port = process.env.PORT || 5000;app.listen(port, function() {
  console.log("Listening on " + port);


});
