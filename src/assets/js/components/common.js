var recover_button = document.querySelector(".auth-form__recover");
var confirm_button = document.querySelector(".auth-form__continue");
var apply_form = document.querySelector(".form-apply-recover");
var recover_form = document.querySelector(".form-recover-check");
var return_form = document.querySelector(".form-return-login");
recover_button.addEventListener("click", () => {
    apply_form.classList.toggle("js--hidden");
    recover_form.classList.toggle("js--hidden");
});
confirm_button.addEventListener("click", () => {
    recover_form.classList.toggle("js--hidden");
    return_form.classList.toggle("js--hidden");
});

apply_form.addEventListener("submit", (event) => {
    event.preventDefault();
});
recover_form.addEventListener("submit", (event) => {
    event.preventDefault();
});