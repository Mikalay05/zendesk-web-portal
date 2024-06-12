let citiesArr = [
    { name: "Madison", imgSrc: "imgs/icons-company/Madison.png" },
    { name: "Dublin", imgSrc: "imgs/icons-company/Dublin.png" },
    { name: "San Francisco", imgSrc: "imgs/icons-company/San-Francisco.png" },
    { name: "London", imgSrc: "imgs/icons-company/London.png" },
    { name: "Copenhagen", imgSrc: "imgs/icons-company/Copenhagen.png" },
    { name: "Melbourne", imgSrc: "imgs/icons-company/Melbourne.png" }
];


let cityIndex = 0;
    let btnLeft = document.querySelector('#btn-left');
    let btnRight = document.querySelector('#btn-right');
    let btnFirst = document.querySelector('#btn-first');
    let btnLast = document.querySelector('#btn-last');
    let circles = document.querySelectorAll('.circleSmall');
    let boxes = document.querySelectorAll('.box-we-have-job');

    btnRight.addEventListener('click', swapCityFront);
    btnLeft.addEventListener('click', swapCityBack);
    btnFirst.addEventListener('click', swapCityFirst);
    btnLast.addEventListener('click', swapCityLast);
    
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            cityIndex = parseInt(circle.getAttribute('data-index'));
            updateCityContent();
        });
    });

    function swapCityFront() {
        cityIndex++;
        if (cityIndex >= citiesArr.length) {
            cityIndex = 0;
        }
        updateCityContent();
    }

    function swapCityBack() {
        cityIndex--;
        if (cityIndex < 0) {
            cityIndex = citiesArr.length - 1;
        }
        updateCityContent();
    }

    function swapCityFirst() {
        cityIndex = 0;
        updateCityContent();
    }

    function swapCityLast() {
        cityIndex = citiesArr.length - 1;
        updateCityContent();
    }

    function updateCityContent() {
        boxes.forEach((box, index) => {
            let img = box.querySelector('img');
            let name = box.querySelector('p');
            let actualIndex = (cityIndex + index) % citiesArr.length;
            img.src = citiesArr[actualIndex].imgSrc;
            img.alt = citiesArr[actualIndex].name;
            name.textContent = citiesArr[actualIndex].name;
        }); 
        // Update circles
        let circles = document.querySelectorAll('.circleSmall');
        circles.forEach((circle, index) => {
            circle.classList.toggle('thisIcon', index === cityIndex);
        });
    }

    // Инициализация слайдера при загрузке страницы
    document.addEventListener('DOMContentLoaded', updateCityContent);