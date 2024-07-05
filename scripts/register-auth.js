
window.onload = function() {
    const register = document.getElementById('resgister');

    register.addEventListener('submit', function(event) {
        event.preventDefault()

        register();
    });

    async function register() {
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const dateob  = document.getElementById('date');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password_confirm = document.getElementById('password-confirm');
        const btn = document.querySelector('.button')

        try {
            name.disabled = true;
            surname.disabled = true;






        }
        catch (error) {

        }
    }


}