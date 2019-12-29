var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var db_connection=

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('login', login(data));
	socket.on('logout', logout(data));

	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
    	io.emit('chat message', msg);
	});

	socket.on('disconnect', function(){
    	console.log('user disconnected');
		socket.broadcast.emit('bye');
	});
});

function login_attempt(data) {

}

http.listen(3000, function(){
  console.log('listening on *:3000');
});