var modalLogin = document.getElementById('myModalLogin');
var btnExploreAllRoles = document.querySelector('.button-explore-all');
var buttonLogin = document.getElementById('closeButtonModelOps');

var overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);


btnExploreAllRoles.addEventListener('click',() => {
    modalLogin.style.display = "flex";
    overlay.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});
buttonLogin.addEventListener('click',() => {
    modalLogin.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});
overlay.addEventListener('click',() => {
    modalLogin.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});