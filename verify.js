const form = document.querySelector("form");

const password = document.getElementById("password");
const confirmationpass = document.getElementById("confpassword");

form.addEventListener("submit", e => {
    if (form.checkValidity()) {
        if (password.value == confirmationpass.value) {
            form.submit();
        }
        else {
            password.classList.add("invalid");
            confirmationpass.classList.add("invalid");
            e.preventDefault();
        }
    }
    else {
        e.preventDefault();
    }



});

