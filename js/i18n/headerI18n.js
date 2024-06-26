const translationsHeader = {
    'en': {
        'sign-in': 'Sign in',
        'product-support': 'Product Support',
        'company': 'Company',
        'contact-us': 'Contact us',
        'language': 'English',
        'products': 'Products',
        'pricing': 'Pricing',
        'solutions': 'Solutions',
        'demo': 'Demo',
        'services': 'Services',
        'resources': 'Resources',
        'get-started': 'Get started'
    },
    'ru': {
        'sign-in': 'Войти',
        'product-support': 'Поддержка продукта',
        'company': 'Компания',
        'contact-us': 'Свяжитесь с нами',
        'language': 'Русский',
        'products': 'Продукты',
        'pricing': 'Цены',
        'solutions': 'Решения',
        'demo': 'Демо',
        'services': 'Услуги',
        'resources': 'Ресурсы',
        'get-started': 'Начать'
    }
};

function translateHeader(lang) {
    const elements = document.querySelectorAll('[data-header-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-header-translate');
        element.textContent = translationsHeader[lang][key];
    });
}
