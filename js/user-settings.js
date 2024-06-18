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