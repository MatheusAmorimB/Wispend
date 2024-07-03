
window.onload = function() {

    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        login();
    });

    async function login() {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const buttonSubmit = document.getElementById('button-submit');

        try {
            email.disabled = true;
            password.disabled = true;
            buttonSubmit.disabled = true;

            resetError(email)
            resetError(password)

            if(email.value.trim() === "" && password.value.trim() === "")

                throw new Error("E-mail e senha são obrigatórios")
                {
                if(email.value.trim() === "") {
                    setError(email, "A área de e-mail não pode está vazia!")

                    throw new Error("E-mail é obrigatório")   
                }
                if(password.value.trim() === "") {
                    setError(password, "A área de senha não pode está vazia!")

                    throw new Error("A senha é obrigatória") 
                }
            }

            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email.value.trim(),
                    password: password.value.trim()
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Sucesso', data);
                alert("Login realizado com sucesso!");
                window.location.href = "/Pages/dashboard.html";
            })

        } catch (error) {
            alert(error.message)
            
            email.disabled = false;
            password.disabled = false;
            buttonSubmit.disabled = false;
        }
    }

    function setError(element, message) {

        const formGroup = element.parentElement;
        const errorSpan = formGroup.querySelector('span');

        errorSpan.innerText = message;
        errorSpan.classList.add('error')
    }

    function resetError(element) {
        const formGroup = element.parentElement;
        const errorSpan = formGroup.querySelector('span');

        errorSpan.innerText = '';
        errorSpan.classList.remove('error')
    }
}