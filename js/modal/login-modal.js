var modalLogin = document.getElementById('myModalLogin');
var modalSuccessful = document.getElementById('myModalSuccessful');
var btnTriggerLogin = document.getElementById('btnTriggerLogin');
var buttonLogin = document.getElementById('closeButtonModelLogin');
var buttonSuccessful = document.getElementById('closeButtonModelSuccessful');


var overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);


btnTriggerLogin.addEventListener('click',() => {
    const signInLink = document.querySelector('li a[data-header-translate="sign-in"]');
    const role = localStorage.getItem('role');
    if (role) {
        modalSuccessful.style.display = "flex";
        overlay.classList.toggle('show');
        document.body.classList.toggle('no-scroll')
    }
    else {
        modalLogin.style.display = "flex";
        overlay.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
    }

});
buttonLogin.addEventListener('click',() => {
    modalLogin.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});
buttonSuccessful.addEventListener('click',() => {
    modalSuccessful.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});
overlay.addEventListener('click',() => {
    modalLogin.style.display = "none";
    modalSuccessful.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});
