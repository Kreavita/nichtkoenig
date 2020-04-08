socket_id = false
game_status = false
login_name = false;

window.onload=function(){
	socket_init();
}

//SOCKET-MGMT
function socket_init() {
	const socket = io("http://localhost");
	socket_id = socket.id;
}

function socket_login() {
	name = document.getElementById("login_name").value
	pass = document.getElementById("login_pass").value
	
	socket.emit("login", {name, pass}, function(data){
		switch (data){
			case 0:
			document.getElementById("login_info").style.color="red"
			document.getElementById("login_info").innerHTML="Wrong Username/Password!"

			case 1:
			document.getElementById("login_info").style.color="green"
			document.getElementById("login_info").innerHTML="Login successful!"
			login_name = name;
		}
	})
}
function socket_register() {
	name = document.getElementById("login_name").value
	pass = document.getElementById("login_pass").value

	socket.emit("register", {name, pass}, function(data){
		switch (data){
			case 0:
			document.getElementById("login_info").style.color="red"
			document.getElementById("login_info").innerHTML="This username is already registered! (Use login)"

			case 1:
			document.getElementById("login_info").style.color="green"
			document.getElementById("login_info").innerHTML="Welcome to Nichtkoenig! (Registration successful)"
			login_name = name;
		}
	})
}
function socket_logout(argument) {
	socket.emit("logout");
	login_name = false;
	game_status = false;
}
function socket_receive(data) {
	switch (data[0]){
		case 0:
		//chat Message
		get_message(data[1][0], data[1][1], data[1][2]);

		case 1: 
		//Lobby Update


		case 2:
		//Game Update
	}
}

//CHAT MGM
function post_message(type, receiver, data) {
	switch (type){
		case 0:
		//private
		socket.emit("chat", {type, receiver, data})

		case 1:
		//lobby
		socket.emit("chat", {type, receiver, data})
		
		case 2:
		//global
		socket.emit("chat", {type, data})
	}
}
function get_message(sender, receiver, data) {
	if(receiver==){

	}else{

	}
	document.getElementById("chat_" + receiver).innerHTML+=""
}

//GAME MGMT
function lobbyConnect(gid) {

}
function lobbyStart(gid, data) {

}
function sendAction(type, target) {

}
function getAction(type, target) {
	document.getElementById
}