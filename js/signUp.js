var usernameMinLength = 3;
var passwordMinLength = 5;
function signUp() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;

    if(username.length < usernameMinLength)
        alert("Username too short!");
    else {

        if(password === rePassword) {

            if(password.length < passwordMinLength )
                alert("Password too short!");
            else {

                var session = "";
                session += username;
                session += "||";
                session += password;
                localStorage.setItem("credentials", session);
                alert("SignUp success! Please login to get started !");
                document.write("<a href='login.html'>Click here to login</a>")
            }
        }
        else
            alert("Passwords doesn't match!");
    }
}