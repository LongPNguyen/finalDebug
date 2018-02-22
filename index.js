function idCard(){
	var firstName = document.getElementById("first").value;
	var lastName = document.getElementById("last").value;
	var address = document.getElementById("address").value;
	var age = document.getElementById("age").value;
	var phoneNumber = document.getElementById("phone").value;
	var numberArray = [];
	numberArray.push(age, phoneNumber);

	document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
	document.getElementById("postAddress").innerHTML = address;
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray) <= 100){
			document.getElementById("postAge").innerHTML = "Age: " + age;
		} else if(numberArray > 100){
			document.getElementById("postPhoneNumber").innerHTML = "Number: " + phoneNumber;
		}
	}
}