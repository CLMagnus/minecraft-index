var splashes = ["Welcome!"];
var splashResult = splashes[Math.floor(Math.random()*splashes.length)];

function randomSplash(){
	splashResult = splashes[Math.floor(Math.random()*splashes.length)];
}

var splashText = document.getElementById("splash");
splashText.innerHTML = splashResult;