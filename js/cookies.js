var msgCookies = document.getElementById("cookies-msg");

function accept() {
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == "sim"){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}