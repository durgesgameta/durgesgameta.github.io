function formValidation()
{
var uname = document.registration.name;
var uemail = document.registration.email;


if(uname.value.length==0){
			alert("name should not be empty");
}

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!uemail.value.match(mailformat))
{
	alert("You have entered an invalid email address!");
}

}
