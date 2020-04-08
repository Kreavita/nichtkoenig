var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var db_con =

OFFLINE=-1
ONLINE=0;
AWAY=1;
IN_QUEUE=2;
IN_LOBBY=3;
IN_GAME=4;

var user_status = {}
var token_user = {}
var games = {}
var lobbys = {}
var friendlists = {}

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('login', login);

	socket.on('queue_join', joinqueue);
	socket.on('queue_leave', leavequeue);

	socket.on('lobby_join', joinlobby);
	socket.on('lobby_leave', leavelobby);

	socket.on('game_start', startgame);
	socket.on('game_join', joingame);
	socket.on('game_leave', leavegame);

	socket.on('chat_friend', chat_friend);
	socket.on('chat_lobby', chat_lobby);

	socket.on('chat_global', function(msg){
		if (token_user[socket.id]) {
	   		console.log('global message: ' + token_user[socket.id]+"-->"+msg);
    		io.emit('global_message',  {token_user[socket.id], msg});
		}
	});

	socket.on('logout', logout);

	socket.on('disconnect', function(){
		logout();
    	console.log('user disconnected');
		socket.broadcast.emit('bye');
	});
});

function login_attempt(data) {
	if(data[1]="password"){
		if ((!token_user[socket.id]||token_user[socket.id]==0) && (!users[data[0]]||users[data[0]]==OFFLINE)) {
			users[data[0]] = ONLINE;
			token_user[socket.id] = data[0];
    		console.log(data[0] + ' logged in. ('+socket.id+')');
		}
	}
}

function logout() {
	if ((token_user[socket.id]&&token_user[socket.id]!=0)) {
		users[token_user[socket.id]] = OFFLINE;
		token_user[socket.id] = 0;
    	console.log(token_user[socket.id] + ' logged out. ('+socket.id+')');
	}
}

http.listen(80, function(){
  console.log('listening on *:80');
});