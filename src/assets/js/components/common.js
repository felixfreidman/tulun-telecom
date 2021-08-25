if (document.querySelector(".auth-form__recover")) {
    var recover_button = document.querySelector(".auth-form__recover");
    recover_button.addEventListener("click", () => {
        apply_form.classList.toggle("js--hidden");
        recover_form.classList.toggle("js--hidden");
    });
}
if (document.querySelector(".auth-form__continu")) {
    var confirm_button = document.querySelector(".auth-form__continue");
    confirm_button.addEventListener("click", () => {
        recover_form.classList.toggle("js--hidden");
        return_form.classList.toggle("js--hidden");
    });
}
if (document.querySelector(".form-apply-recover")) {
    var apply_form = document.querySelector(".form-apply-recover");

    apply_form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
if (document.querySelector(".form-recover-check")) {
    var recover_form = document.querySelector(".form-recover-check");
    recover_form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
if (document.querySelector(".form-return-login")) {
    var return_form = document.querySelector(".form-return-login");
}

if (document.querySelectorAll(".navigation-menu__item-link")) {
    var allLink = document.querySelectorAll(".navigation-menu__item-link");
    var currentLocation = window.location.href;

    allLink.forEach((element) => {
        var link = element.getAttribute("href");
        var formatedLink = link.replace("./", "");
        formatedLink = formatedLink.replace(".html", "");
        if (currentLocation.includes(formatedLink)) {
            element.classList.add("item--checked");
        }
    });
}