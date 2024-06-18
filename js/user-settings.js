document.addEventListener('DOMContentLoaded', function() {
    const signInLink = document.querySelector('li a[data-header-translate="sign-in"]');
    const role = localStorage.getItem('role');



    if (role) {

        if (role === 'admin') {
            document.querySelectorAll('.admin').forEach(element => {
                element.style.display = 'block';
            });
            document.querySelectorAll('.user').forEach(element => {
                element.style.display = 'none';
            }); 

            fetch('Json/users.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка в fetch: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(users => {
                    const lastThreeUsers = users.slice(-3).reverse(); // Последние 3 пользователя в обратном порядке
                    console.log(lastThreeUsers)
                    document.getElementById('new-user-1').textContent = `${lastThreeUsers[0].nickname}: ${lastThreeUsers[0].firstname} ${lastThreeUsers[0].secondname}`;
                    document.getElementById('new-user-2').textContent = `${lastThreeUsers[1].nickname}: ${lastThreeUsers[1].firstname} ${lastThreeUsers[1].secondname}`;
                    document.getElementById('new-user-3').textContent = `${lastThreeUsers[2].nickname}: ${lastThreeUsers[2].firstname} ${lastThreeUsers[2].secondname}`;
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
        }


        signInLink.textContent = 'Log out';
        signInLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            window.location.href = "index.html";
        });
    }
});