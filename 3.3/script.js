$(document).ready(function(){

});
var count = 0;

var startList;
function startListFunction () {

startList = setInterval(function(){ 
	count += 1;
	var liObj = document.createElement("li");
	var liTxt = document.createTextNode("Listobjekt " + count);
	liObj.appendChild(liTxt);

	var list = document.getElementById("appendingList");
	list.appendChild(liObj);

}, 1000);

}

function stopListFunction() {
	clearInterval(startList);
}

function alertFunction() {
	alert("du har klickat på alert knappen");
}

function confirmFunction() {
	confirm("du har klickat på confirm knappen");
}
function promptFunction() {
	prompt("du har klickat på prompt knappen");
}

var newWindow;
function openFunction(){
	newWindow = window.open("", "New Window", "width=300,height=200");
	newWindow.document.write(
		"<h1>Nytt Fönster</h1>"+
		"<p>Detta är ett nytt fönster som är 300px brett och 200px högt</p>");

}

function closeFunction(){
	newWindow.close();
}
var setTimeVar;

function timeoutFunction() {
	setTimeVar = setTimeout(function(){
		alert("Hej hej, jag är en alert box!!");
	}, 3000);
}
function clearTimeoutFunction() {
	clearTimeout(setTimeVar);
}
