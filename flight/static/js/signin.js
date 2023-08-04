document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".inp").forEach(input => {
        input.addEventListener('input', () => {
            const username = document.querySelector('.usrnm').value;
            const password = document.querySelector('.pswd').value;
            
            if (username.length === 0 || password.length === 0) {
                document.querySelector('input[type="submit"]').disabled = true;
            } else {
                document.querySelector('input[type="submit"]').disabled = false;
            }
        });
    });
});
