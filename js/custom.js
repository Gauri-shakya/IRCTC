
function validation(){
    let fullname= document.getElementById("fullname").value;
let email= document.getElementById("e-mail").value;
let contact= document.getElementById("contact").value;



if(fullname==""){
    document.getElementById("f-name").innerHTML="* It is required";
    return false;
}
// if((fullname.lenght<=2) || (fullname.lenght>=20)){
//     document.getElementById("f-name").innerHTML="User length must between 2 to20 characters";
//     return false;
//             }
//             if(!isNaN("user")){
//     document.getElementById("f-name").innerHTML="character allowed";
//     return false;
//             }
       


if(email==""){
    document.getElementById("email-g").innerHTML="Email is required"
    return false;
}
if(contact==""){
    document.getElementById("contact-g").innerHTML="Contact Number is required"
    return false;
}


}


function cap(){
    var alpha =["A","B","C","D","E","F" ,"1","2","3","4","5"]
    var a=alpha[Math.floor(Math.random()*11)];
    var b=alpha[Math.floor(Math.random()*11)];
    var c=alpha[Math.floor(Math.random()*11)];
    var d=alpha[Math.floor(Math.random()*11)];
    var final =a+b+c+d;
    document.getElementById("capt").value=final;
}
function validcap(){
    var st1=document.getElementById("capt").value;
    var st2=document.getElementById("textinput").value;
    if(st1==st2){
        alert("form is validated");
return true;
    }else{
        alert("enter a valid captcha");
        return false;
    }
}