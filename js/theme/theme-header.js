document.addEventListener('DOMContentLoaded', () => {

    // Устанавливаем тему при загрузке страницы
    const theme = localStorage.getItem('theme') || 'light';
    applyTheme(theme);

    // Устанавливаем слушатель для переключателя темы
    const themeSwitcher = document.querySelector('.swipe-tem');
    const themeSwitcherInBurger = document.querySelector('.swipe-tem.in-burger');

    console.log(themeSwitcherInBurger)
    themeSwitcher.addEventListener('click', () => {
        toggleTheme();
    });
    themeSwitcherInBurger.addEventListener('click', () => {
        toggleTheme();
    });
});

function applyTheme(theme) {
    const elements = document.querySelectorAll('*');

    if (theme === 'dark') {
        elements.forEach(element => {
            element.classList.add('dark-theme');
        });
        document.getElementById('logo-zendesk').src = 'imgs/dark-imgs/dark-logo.png';
    } else {
        elements.forEach(element => {
            element.classList.remove('dark-theme');
        });
        document.getElementById('logo-zendesk').src = 'imgs/logo-zendesk.png';
    }
}

function toggleTheme() {
    console.log('смена темы');
    const currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);


    // Сохраняем новую тему в localStorage
    localStorage.setItem('theme', newTheme);
}
