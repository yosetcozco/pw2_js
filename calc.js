
function and(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
	var result ="error";
	if(number1==1&&number2==1){
		result = 1
	}
	else{
		result = 0;
	}
	
	document.getElementById("result").innerHTML = result;
}

