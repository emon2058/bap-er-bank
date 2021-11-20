document.getElementById("login-success").addEventListener('click',function(){
    const userEmail=document.getElementById('user-email');
    const emailValue = userEmail.value;
    const userPass=document.getElementById('user-pass');
    const passValue = userPass.value;
    console.log(emailValue,passValue);
    if(emailValue == "emon@gmail.com" && passValue == "boss"){
        window.location.href="banking.html"
    }
    else{
        alert("not matched");
    }

})