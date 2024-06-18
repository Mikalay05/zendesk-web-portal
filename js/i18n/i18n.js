
document.addEventListener('DOMContentLoaded', () => {
    console.log('перевод загрузка')

    const lang = localStorage.getItem('language') || 'en';
    translatePage(lang);
    document.querySelector('[data-header-translate="language"]').addEventListener('click', toggleLanguage);
    document.querySelector('.lng-line.in-burger').addEventListener('click', toggleLanguage);
})

function translatePage(lang) {
    console.log('перевод старницы')

    translateHeader(lang);
    translateFooter(lang);
    translateMain(lang);

}
function toggleLanguage() {
    console.log('смена языка')

    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang=='en'? 'ru': 'en';
    localStorage.setItem('language',newLang);
    translatePage(newLang);
}
function translateMain(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translationsMain[lang][key];
    });
}