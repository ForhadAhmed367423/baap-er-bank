document.getElementById('btn-log').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPass = document.getElementById('user-password');
    const password = userPass.value;
    console.log(email,password);

    if(email==='afforhadah909@gmail.com' && password === 'forhad1234'){
        window.location.href='bank.html';
    }
    else(
    console.log('invalid user')
    )

})