// Переменные для хранения пользователей из localStorage и из JSON
var usersLocal = JSON.parse(localStorage.getItem('users')) || [];
var usersJson;

// Переменная для хранения всех пользователей
var users = [];

// Получение данных о пользователях из JSON
fetch('Json/users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        return response.json();
    })
    .then(jsonData => {
        usersJson = jsonData;
        // Объединение пользователей из JSON и localStorage
        users = usersJson.concat(usersLocal);
        // Вызов функции для обработки входа
        login(users);
    });

// Функция для обработки входа
function login(users) {
    console.log(users);
    document.getElementById('sign-in').addEventListener('click', function() {
        const nickname = document.getElementById('nicknameSignIn').value.trim();
        const password = document.getElementById('passwordSignIn').value.trim();

        const nicknameError = document.getElementById('nickname-error');
        const passwordError = document.getElementById('password-error');

        const user = users.find(user => user.nickname === nickname);

        if (!user) {
            nicknameError.textContent = 'Login does not exist';
            passwordError.textContent = '';
        } else if (user.password !== password) {
            passwordError.textContent = 'Incorrect password';
            nicknameError.textContent = '';
        } else {
            nicknameError.textContent = '';
            passwordError.textContent = '';
            console.log('Login successful');
            localStorage.setItem('username', user.nickname);
            localStorage.setItem('role', user.role);
            console.log(user.role);
            window.location.href = "index.html";
        }
    });

    document.getElementById('eye-icon-login').addEventListener('click', function() {
        const passwordField = document.getElementById('passwordSignIn');
        const eyeIcon = document.getElementById("eye-icon-login");
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.src = 'imgs/eyesPass.png';  // Открытый глаз иконка
        } else {
            passwordField.type = 'password';
            eyeIcon.src = 'imgs/eyesClose.png';  // Закрытый глаз иконка
        }
    });

    document.getElementById('passwordSignIn').addEventListener("paste", function(e) {
        e.preventDefault();
    });
}
