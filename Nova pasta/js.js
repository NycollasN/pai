

   
    

const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.f-c');
        input.type = input.type === 'password' ? 'text' : 'password';

        // Alternar ícone
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});
