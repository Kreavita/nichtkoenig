var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/../index.html');
});

http.listen(80, function(){
  console.log('listening on *:80');
});