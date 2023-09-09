
function validate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( username == "gireesh@gmail.com" && password == "1234"){
        alert ("Login successfully");
        alert("Welcome to the dashboard");
        window.location.replace ("dashboard.html");
        return false;
    }
    else if ( username == "aadarsh@gmail.com" && password == "7894"){
        alert ("Login successfully");
        alert("Welcome to the dashboard");
        window.location.replace ("dashboard2.html");
        return false;
    }
    else{
        
        alert("Invalid Credentials");
       
    }
}