document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const birthdateInput = document.getElementById("birthdate");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const lastnameInput = document.getElementById("firstname");
    const firstnameInput = document.getElementById("name");
    const middlenameInput = document.getElementById("middlename");
    const nicknameInput = document.getElementById("nickname");
    const agreementInput = document.getElementById("agreement");
    const registerButton = document.getElementById("register-button");
    const generateNicknameButton = document.getElementById("generate-nickname");
    let usersArray = [];
    const showPasswordCheckbox = document.getElementById("show-password");

    const errors = {
        phone: document.getElementById("phone-error"),
        email: document.getElementById("email-error"),
        birthdate: document.getElementById("birthdate-error"),
        password: document.getElementById("password-error"),
        confirmPassword: document.getElementById("confirm-password-error"),
        lastname: document.getElementById("firstname-error"),
        firstname: document.getElementById("name-error"),
        middlename: document.getElementById("middlename-error"),
        nickname: document.getElementById("nickname-error"),
        agreement: document.getElementById("agreement-error"),
    };
    const top100Passwords = [
        "123456",
        "password",
        "12345678",
        "qwerty",
        "123456789",
        "Qwerty123№",
    ]; // Пример топ 100 паролей

    function getUsers() {
        fetch("Json/users.json")
            .then((response) => response.json())
            .then((users) => {
                usersArray = users;
                console.log(usersArray); // Проверка содержимого массива пользователей
            })
            .catch((error) => {
                console.error("Ошибка при получении пользователей", error);
            });
    }
    getUsers();

    showPasswordCheckbox.addEventListener("click", function () {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
    });

    function validatePhone() {
        console.log("проверка телефона");
        const phonePattern = /^(\+375|80)(29|33|44|25)\d{7}$/;
        if (!phonePattern.test(phoneInput.value)) {
            errors.phone.textContent = "Введите корректный номер телефона РБ.";
            return false;
        }
        errors.phone.textContent = "";
        return true;
    }
    phoneInput.addEventListener("input", validatePhone);

    function validateEmail() {
        if (!emailInput.validity.valid) {
            errors.email.textContent = "Введите корректный email.";
            return false;
        }
        errors.email.textContent = "";
        return true;
    }
    emailInput.addEventListener("input", validateEmail);

    function validateBirthdate() {
        const today = new Date();
        const birthdate = new Date(birthdateInput.value);
        const age = today.getFullYear() - birthdate.getFullYear();
        if (age < 16 || (age === 16 && today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate()))) {
            errors.birthdate.textContent = "Регистрация доступна только для пользователей старше 16 лет.";
            return false;
        }
        errors.birthdate.textContent = "";
        return true;
    }
    birthdateInput.addEventListener("input", validateBirthdate);

    function validatePasswordStrength(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!passwordPattern.test(password)) {
            return "Пароль должен содержать от 8 до 20 символов, включать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.";
        }
        if (top100Passwords.includes(password)) {
            return "Пароль не должен входить в топ-100 самых распространенных паролей.";
        }
        return "";
    }

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const passwordStrengthError = validatePasswordStrength(password);
        if (passwordStrengthError) {
            errors.password.textContent = passwordStrengthError;
            return false;
        }

        if (password !== confirmPassword) {
            errors.confirmPassword.textContent = "Пароли не совпадают.";
            return false;
        }

        errors.password.textContent = "";
        errors.confirmPassword.textContent = "";
        return true;
    }
    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validatePassword);

    function validateLastname() {
        if (!lastnameInput.value) {
            errors.lastname.textContent = "Поле Фамилия обязательно для заполнения.";
            return false;
        }
        errors.lastname.textContent = "";
        return true;
    }
    lastnameInput.addEventListener("input", validateLastname);

    function validateFirstname() {
        if (!firstnameInput.value) {
            errors.firstname.textContent = "Поле Имя обязательно для заполнения.";
            return false;
        }
        errors.firstname.textContent = "";
        return true;
    }
    firstnameInput.addEventListener("input", validateFirstname);

    function validateNickname() {
        const nickname = nicknameInput.value;
        console.log("проверка ника");
        if (!nickname) {
            errors.nickname.textContent = "Поле никнейм обязательно для заполнения.";
            return false;
        }

        if (usersArray.some((user) => user.nickname === nickname)) {
            errors.nickname.textContent = "Никнейм уже занят.";
            return false;
        }
        errors.nickname.textContent = "";
        return true;
    }
    nicknameInput.addEventListener("input", validateNickname);

    function generateNickname() {
        let randomNickname;
        let attempts = 5;
        do {
            randomNickname = `user${Math.floor(Math.random() * 10000)}`;
            attempts--;
        } while (usersArray.some((user) => user.nickname === randomNickname) && attempts > 0);

        if (attempts === 0) {
            nicknameInput.value = '';
            errors.nickname.textContent = 'Превышено количество попыток генерации. Введите никнейм самостоятельно.';
        } else {
            nicknameInput.value = randomNickname;
            errors.nickname.textContent = '';
        }
    }

    generateNicknameButton.addEventListener("click", generateNickname);

    function validateAgreement() {
        if (!agreementInput.checked) {
            errors.agreement.textContent = "Вы должны согласиться с условиями.";
            return false;
        }
        errors.agreement.textContent = "";
        return true;
    }
    agreementInput.addEventListener("change", validateAgreement);

    function validateForm() {
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isBirthdateValid = validateBirthdate();
        const isPasswordValid = validatePassword();
        const isLastnameValid = validateLastname();
        const isFirstnameValid = validateFirstname();
        const isNicknameValid = validateNickname();
        const isAgreementValid = validateAgreement();
        return (
            isPhoneValid &&
            isEmailValid &&
            isBirthdateValid &&
            isPasswordValid &&
            isLastnameValid &&
            isFirstnameValid &&
            isNicknameValid &&
            isAgreementValid
        );
    }

    registerButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (validateForm()) {
            const user = {
                phone: phoneInput.value,
                email: emailInput.value,
                birthdate: birthdateInput.value,
                password: passwordInput.value,
                lastname: lastnameInput.value,
                firstname: firstnameInput.value,
                middlename: middlenameInput.value,
                nickname: nicknameInput.value,
            };
            usersArray.push(user);
            console.log(usersArray); // Проверка содержимого массива пользователей
        }
    });
});
