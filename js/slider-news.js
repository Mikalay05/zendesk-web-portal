let newsArr = [
    {
        title: "CX Trends 2021",
        subtitle: "New world, new CX",
        description: "Last year, customer needs changed in a blink. Learn how your team can keep up.",
        link: "Read report",
        linkHref: "#",
        lineClass: "line-red"
    },
    {
        title: "CX Champions",
        subtitle: "Speed + quality = agility",
        description: "How leading CX orgs support customer-centric processes and drive business agility.",
        link: "Read more",
        linkHref: "#",
        lineClass: "line-blue"
    },
    {
        title: "New product offering",
        subtitle: "Introducing the Zendesk Suite",
        description: "Our new all-in-one customer service solution is easy to use, convenient for customers, and scales with your business.",
        link: "Learn more",
        linkHref: "",
        lineClass: "line-yellow"
    }
];

let newsIndex = 0;
let btnNewsLeft = document.querySelector('#button-news-left');
let btnNewsRight = document.querySelector('#button-news-right');

btnNewsRight.addEventListener('click', swapNewsFront);
btnNewsLeft.addEventListener('click', swapNewsBack);

function swapNewsFront() {
    newsIndex++;
    if (newsIndex >= newsArr.length) {
        newsIndex = 0;
    }
    updateNewsContent();
}

function swapNewsBack() {
    newsIndex--;
    if (newsIndex < 0) {
        newsIndex = newsArr.length - 1;
    }
    updateNewsContent();
}

function updateNewsContent() {
    let newsBox = document.querySelector('#news-box-1');
    newsBox.innerHTML = `
        <h4>${newsArr[newsIndex].title}</h4>
        <h3>${newsArr[newsIndex].subtitle}</h3>
        <p>${newsArr[newsIndex].description}</p>
        <a href="${newsArr[newsIndex].linkHref}">${newsArr[newsIndex].link}</a>
        <div class="news-line ${newsArr[newsIndex].lineClass}"></div>
    `;
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', updateNewsContent);
