
window.addEventListener("load", function(){
    /*------------ page loader ------------------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function(){
       document.querySelector(".page-loader").style.display="none";
    },600);
    AOS.init();
 });

 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}


function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    // login form fetch
    loginForm.addEventListener("submit", e => {

        // fetch POST request

        setFormMessage(loginForm, "error", "Usuario o contraseña invalidos");
    });

    // createAccount form fetch
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        // fetch POST request

        setFormMessage(createAccountForm, "error", "Usuario o contraseña invalidos");
    });
});

$("#createAccount").on("submit", function (){
    const emailReg = document.getElementById('newEmail').value;
    console.log(emailReg)
})