function sign_inner(){
    var names = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cook = document.getElementById('cook').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    console.log(names.match(/ /g).length)
    if (names.match(/ /g).length < 2){
        alert('the full name form should contain from your name to your grandfather');
    }
    else if(email.search('@') === -1 || email.length == 0){
        alert('please input the appropriate email format');
    }
    else if (password.length > 10 || password.length < 5){
        alert('the password length should be between 5 and 10');
    }
    else if( password != password2){
        alert("password and the re entered password should be similar");
    }
    else{
        alert('Successfully signed in!')
        window.location = 'Home.html'
    }
}