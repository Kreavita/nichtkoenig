window.onload=function () {
	nav = new Nav();
	nav.home();
    fadeInfo("Early Alpha Stage", "This Game is in early alpha stage. There are huge parts still missing and Bugs may occur.");
}
//FadeDesign
function fadeRemove(obj) {
	$(obj).animate({opacity:0}, 200, function(){
		obj.remove();
	});
}
function fadeUpdate(obj, way, newobj){
  $("#"+obj).animate({opacity:0}, 200, function(){
  	if(way=="src"){
  		document.getElementById(obj).src=newobj;
	}
  	if(way=="html"){
  		document.getElementById(obj).innerHTML=newobj;
	}
  	if(way=="jquery"){
  		$("#"+obj).load(newobj);
	}
   $("#"+obj).animate({opacity:1}, 200);
  });
}
function fadeInfo(title, content) {
	var e=document.createElement("div");
	e.classList.add("alertbox-container");
	e.style.opacity=0;
	e.innerHTML=`<div class="alertbox"><div id="title">${title}</div><div id="content">${content}</div><div class="action-row"><div class="superbtn" onclick="fadeRemove(this.parentElement.parentElement.parentElement)">OK</div></div></div>`
	document.body.append(e);
	$(e).animate({opacity:1}, 200);
}

class Nav {
	home(){
		fadeUpdate("main", "jquery", "html/home.html");
	}
	rules(){
		fadeUpdate("main", "jquery", "html/rules.html");
	}
	login(){
		$.get("html/login.html", function(data){
			fadeInfo("Login/Register", data);
		})
	}
}

class SocketIO{
	
}