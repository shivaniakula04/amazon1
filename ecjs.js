function validateTextbox()
{
	
	var password=document.getElementById("password");
	var number=document.getElementById("number");
	if (password.value.length<5)
	{
		alert("Password is too short");
		return false;
	}
	else if(number.value.trim().length!=10)
	{
		alert("Invalid Mobile Number");
		return false;
	}
	else
	{
		true;
		alert("Account Created");
	}
}

