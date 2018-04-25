
function validate() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var session = localStorage.getItem("credentials");
    var input = username+"||"+password;

    if(input === session) {

        alert("login success");
        document.write("<a href='book.html'> Click here to read the book!</a>");
    }
    else
        alert("Invalid username or password!");
}