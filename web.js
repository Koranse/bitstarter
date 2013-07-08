var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

wr = fs.readFileSync('index.html');
buf = new Buffer(256);

app.get('/', function(request, response) {
  response.send(buf.toString('utc8', fs.readFileSync('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

