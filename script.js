function login(){

    var uid = document.getElementById("userId").value;
    var pass = document.getElementById("psw").value;
    if (uid == "rk" && pass == 123){
       window.location.assign("home.html");
    }
    else {
        window.alert("Login Invalid !!!");
    }
}