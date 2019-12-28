window.onload=function () {
	nav = new Nav();
	nav.home();
    fadeInfo("Hallo", "Test123");
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
	e.innerHTML=`<div class="alertbox"><div id="title">${title}</div><div id="content">${content}</div><div id="action"><div class="superbtn" onclick="fadeRemove(this.parentElement.parentElement.parentElement)">OK</div></div></div>`
	document.body.append(e);
	$(e).animate({opacity:1}, 200);
}

class Nav {
	home(){
		fadeUpdate("main", "jquery", "home.html");
	}
}