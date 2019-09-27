var country = ['Austria', 'Hungary', 'Greece'];

var horse_power = document.getElementById('power').value;
var age = document.getElementById('age').value;

var austria = document.getElementById('input_one');
var hungary = document.getElementById('input_two');
var greece = document.getElementById('input_three');

var calcInsurance ="";

function calculateInsurance1(){
	if(austria=country[0]){
		calcInsurance = parseInt(horse_power * 100 / age + 50);
		document.getElementById('final_sum_1').innerHTML = "Your insurance for Austria costs " + calcInsurance + " €.";
		console.log(calcInsurance);
	} else {
		document.getElementById('final_sum_1').innerHTML = "Choose your country";
		console.log("hello from console");
	}
}

function calculateInsurance2(){
	if (hungary=country[1]){
		calcInsurance = parseInt(horse_power * 120 / age + 100);
		document.getElementById('final_sum_2').innerHTML = "Your insurance for Hungary costs " + calcInsurance + " €.";
		console.log(calcInsurance);
	}else{
		document.getElementById('final_sum_2').innerHTML = "Choose your country";
		console.log("hello from console");
	}
}

function calculateInsurance3(){
	if(greece=country[2]){
		calcInsurance = parseInt(horse_power * 150/(age + 3) + 100);
		document.getElementById('final_sum_3').innerHTML = "Your insurance for Greece costs " + calcInsurance + " €.";
		console.log(calcInsurance);
	}else{
		document.getElementById('final_sum_3').innerHTML = "Choose your country";
		console.log("hello from console");
	}
}

// function calculateInsurance(){
// 	if(austria=country[0]){
// 		calcInsurance = Number(horse_power * 100 / age + 50);
// 		document.getElementById('final_sum_1').innerHTML = calcInsurance;
// 		console.log(calcInsurance);
// 	} else 
// 	if (hungary=country[1]){
// 		calcInsurance = Number(horse_power * 120 / age + 100);
// 		document.getElementById('final_sum_2').innerHTML = calcInsurance;
// 		console.log(calcInsurance);
// 	}else
// 	if(greece=country[2]){
// 		calcInsurance = Number(horse_power * 150 / (age + 3) + 100);
// 		document.getElementById('final_sum_3').innerHTML = calcInsurance;
// 		console.log(calcInsurance);
// 	}else{
// 		console.log("hello from console");
// 	}
// }