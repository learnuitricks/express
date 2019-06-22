

function validateLogin(){
var a=document.getElementById("username").value;
var b=document.getElementById("password").value;
if(a==undefined || a==null || a==""){
    alert('username is empty');
    return false;
}
}