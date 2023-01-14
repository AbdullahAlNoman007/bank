document.getElementById('btn-submit').addEventListener('click',function(){

    const emailfield= document.getElementById('email')
    const email =emailfield.value

    const passwordfield= document.getElementById('password')
    const password =passwordfield.value
    if (email === 'ruet@cse.com' && password === "123" ){

        location.href = 'bank.html';

    }
    else{

        alert("Invaild user")
    }



})
