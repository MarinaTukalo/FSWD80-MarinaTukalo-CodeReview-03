function myFunction(){
	var name = document.getElementById('custom_name').value;
	var horse_power = document.getElementById('power').value;
	var age = document.getElementById('age').value;
	var country = document.getElementById('country').value;

	if(country == "Austria"){
		var insurance = Number(horse_power) * 100 / Number(age) + 50;
		document.getElementById('final_sum').innerHTML = name + ", your insurance in " + country + " is " + insurance + "€.";
	}else if (country == "Hungary"){
		var insurance = Number(horse_power)* 120 / Number(age) + 100;
		document.getElementById('final_sum').innerHTML = name + ", your insurance in " + country + " is " + insurance + "€.";
	}else {
		var insurance = Number(horse_power) * 150 / (Number(age) + 3) + 100;
		document.getElementById('final_sum').innerHTML = name + ", your insurance in " + country + " is " + insurance + "€.";
	}
}