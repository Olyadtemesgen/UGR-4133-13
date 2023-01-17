var attempt = 3;
// Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById('email').value;
    if (username[0] != '@'){
        alert('username should start with @')
    }
    else if (password.length >= 10){
        alert('the password should be less than 10')
    }
    else if (email.search('@') === -1){
        alert('your email input does not have the email form')
    }
    if ( username == "@oliyitu" && password == "oliyitu" && email == 'olexyit@gmail.com'){
        alert ("Login successfully");
        window.location = "MotherBets.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}