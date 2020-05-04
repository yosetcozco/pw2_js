function color(){
	var num1,num2,num3;
	num1 = Math.floor(Math.random() * 256);
	num2 = Math.floor(Math.random() * 256);
	num3 = Math.floor(Math.random() * 256);
	var colori = "rgb("+num1+","+num2+","+num3+")";
	document.getElementById("text").style.color = colori;
}

function size(){
	var sizei = Math.floor(Math.random() * 128);
	document.getElementById("text").style.fontSize = sizei + "px";
}