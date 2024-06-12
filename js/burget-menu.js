console.log("Запуск!");
var burgerMenu = document.querySelector('.burger-menu');
var line2 = document.querySelector('#burger-line-2');
var line3 = document.querySelector('#burger-line-3');
var nav = document.querySelector('#burger-menu-show-box');
line2.style.width = "40px";
line3.style.width = "40px";

// Создание и добавление оверлея
var overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

burgerMenu.addEventListener('click', ()=>{
    ChangeOnClick();
});

function ChangeOnClick() {
    nav.classList.toggle('is-visible');

    overlay.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    
    if (line2.style.width === "40px") {
        line2.style.width = "30px";
    } else {
        line2.style.width = "40px";
    }
    
    if (line3.style.width === "40px") {
        line3.style.width = "20px";
    } else {
        line3.style.width = "40px";
    }
}

// Обработчик события для оверлея
overlay.addEventListener('click', function () {
    ChangeOnClick();
});

// Обработчики событий для всех ссылок в меню
document.querySelectorAll('#nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('is-visible');
        overlay.classList.remove('show');
        document.body.classList.remove('no-scroll');
    });
});
