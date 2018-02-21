function idCard(){
	var firstName = document.getElementById("first").value;
	var lastName = document.getElementById("last").value;
	var address = document.getElementById("address").value;
	var age = document.getElementById("age").value;
	var phoneNumber = document.getElementById("phone").value;
	var numberArray = [];

	document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
	document.getElementById("postAddress").innerHTML = address;
	for(var i = 0; i < numberArray.length; i++){
		if(numberArray <= 100){
			document.getElementById("numberArray").innerHTML = "Age: " + age;
		} else if(numberArray >= 100){
			document.getElementById("numberArray").innerHTML = "Number: " + phoneNumber;
		}
	}
}