//your JS code here. If required.

let textElement = document.getElementById("status");
let btnElement = document.getElementById("enterBtn");

function changeText(){
	textElement.innerHTML = "<h1>Entered Metaverse<h1>"
}

btnElement.addEventListener("click",changeText)
