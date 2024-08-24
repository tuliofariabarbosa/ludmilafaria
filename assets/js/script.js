var cookiesAlert = document.getElementById('cookies')

function accepted(){
    localStorage.lgpd = "accepted information"
    cookiesAlert.classList.remove('show')
}

if(localStorage.lgpd == 'accepted information'){
    cookiesAlert.classList.remove('show')
}else{
    cookiesAlert.classList.add('show')
}
