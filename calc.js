function and(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
	var result = "";
	for(var i =0; i < number1.length; i++){
		var part1 = number1.charAt(i);
		var part2 = number2.charAt(i);
		var part3;
		if(part1==1&&part2==1){
		part3 = 1
			}
			else{
			part3 = 0;
				}
		result = result + part3;
	}
	alert(number1.length);
	document.getElementById("result").innerHTML = result;
}

function or(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
	var result = "";
	for(var i =0; i < number1.length; i++){
		var part1 = number1.charAt(i);
		var part2 = number2.charAt(i);
		var part3;
		if(part1 == 0 && part2 ==0){
		part3 = 0
			}
			else{
			part3 = 1;
				}
		result = result + part3;
	}
	document.getElementById("result").innerHTML = result;
}
function xor(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
	var result = "";
	for(var i =0; i < number1.length; i++){
		var part1 = number1.charAt(i);
		var part2 = number2.charAt(i);
		var part3;
		if((part1 == 0 && part2 ==0 )|| (part1 == 1 && part2 == 1)){
		part3 = 0
			}
			else{
			part3 = 1;
				}
		result = result + part3;
	}
	document.getElementById("result").innerHTML = result;
}

function adition(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
	var result = number1 + number2;
	document.getElementById("result").innerHTML = result;
}
function subtraction(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
	var result = number1 - number2;
	document.getElementById("result").innerHTML = result;
}

function division(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
var result = "0";
	if(number1 == 0 && number2 == 0){
		document.getElementById("result").innerHTML ="undefined";
	}else if(number2 == 0){
		document.getElementById("result").innerHTML = "undefined";
	}else {
	var result = number1/number2;
	document.getElementById("result").innerHTML = result;
		}
}

function multiplication(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;	
var result = number1*number2;
	document.getElementById("result").innerHTML = result;
}

