var modalError = document.getElementById('myModalError');
var btnExploreAllRoles = document.querySelector('.button-explore-all');
var buttonError = document.getElementById('closeButtonModelOps');

var overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);


btnExploreAllRoles.addEventListener('click',() => {
    modalError.style.display = "flex";
    overlay.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});
buttonError.addEventListener('click',() => {
    modalError.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});
overlay.addEventListener('click',() => {
    modalError.style.display = "none";
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});