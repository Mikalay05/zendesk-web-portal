document.addEventListener('DOMContentLoaded', function() {
    const signUpTab = document.getElementById('sign-up-tab');
    const signInTab = document.getElementById('sign-in-tab');
    const signUpForm = document.querySelector('.sign-up-form');
    const signInForm = document.querySelector('.sign-in-form');

    // Изначально отображаем форму регистрации
    signUpForm.classList.add('active');

    // Обработчик для кнопки "Sign up"
    signUpTab.addEventListener('click', function() {
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
    });

    // Обработчик для кнопки "Sign in"
    signInTab.addEventListener('click', function() {
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
    });
});
