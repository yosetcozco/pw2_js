
function and(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
	var result ="";
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

