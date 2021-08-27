if (document.querySelector(".auth-form__recover")) {
    var recover_button = document.querySelector(".auth-form__recover");
    recover_button.addEventListener("click", () => {
        apply_form.classList.toggle("js--hidden");
        recover_form.classList.toggle("js--hidden");
    });
}
if (document.querySelector(".auth-form__continue")) {
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
        if (currentLocation.includes(formatedLink)) {
            element.classList.add("item--checked");
        }
    });
}

// Операции с тарифами

// Сначала получим и выведем значение отмеченного option
if (document.getElementById("rateSelect")) {
    var selectInputField = document.getElementById("rateSelect");
    var allOptionsArray = document.querySelectorAll(".rate-form__option");
    var selectModalWindow = document.getElementById("rateModal");
    displaySelectValue();
    // По клику меняем значение data-checked
    allOptionsArray.forEach((element) => {
        element.addEventListener("click", () => {
            uncheckEverySpan();
            element.setAttribute("data-checked", "checked");
            displaySelectValue();
            selectModalWindow.classList.remove("js--hidden");
            selectInputField.classList.toggle("js--rotate-arrow");
        });
    });
    selectInputField.addEventListener("click", () => {
        selectInputField.classList.toggle("js--rotate-arrow");
        selectModalWindow.classList.toggle("js--hidden");
    });

    selectModalWindow.addEventListener("mouseleave", () => {
        selectInputField.classList.toggle("js--rotate-arrow");
        selectModalWindow.classList.add("js--hidden");
    });
}
// Передача data-checked значения в поле Select
function displaySelectValue() {
    var selectInputField = document.getElementById("rateSelect");
    var allOptionsArray = document.querySelectorAll(".rate-form__option");
    allOptionsArray.forEach((element) => {
        var checkedBool = element.getAttribute("data-checked");
        if (checkedBool == "checked") {
            var checkedValue = element.textContent;
            selectInputField.value = checkedValue;
        }
    });
}

function uncheckEverySpan() {
    var allOptionsArray = document.querySelectorAll(".rate-form__option");
    allOptionsArray.forEach((newElement) => {
        newElement.setAttribute("data-checked", "unchecked");
    });
}

// Обработка формы поиска в боковом меню
if (document.querySelector(".search-section--form ")) {
    var sidebarSearchForm = document.querySelector(".search-section--form");
    var sidebarSearchInput = document.querySelector(
        ".input-section__search-input"
    );
    sidebarSearchForm.addEventListener("submit", (event) => {
        var searchValue = sidebarSearchInput.value;
        localStorage.setItem("searchResult", searchValue);
    });
}

// Результаты поиска

if (document.getElementById("searchField")) {
    var searchFieldResult = document.getElementById("searchField");
    var searchResult = localStorage.getItem("searchResult");
    console.log(localStorage.getItem("searchResult"));
    searchFieldResult.value = searchResult;
    if (searchFieldResult.value == "Платеж") {
        document.getElementById("fullResult").classList.remove("js--hidden");
        document.getElementById("emptyResult").classList.add("js--hidden");
    }
}

if (document.querySelector(".blocking-form__input")) {
    // Добавление подложки
    var calendarInputs = document.querySelectorAll(".blocking-form__input");
    calendarInputs.forEach((element) => {
        element.addEventListener("click", () => {
            var layer = document.createElement("div");
            layer.classList.add("calendar-layer");
            document.querySelector("body").append(layer);
            layer.addEventListener("click", () => {
                layer.classList.add("js--hidden");
            });
            var calendar = document.querySelector(".ui-datepicker");

            var allLinks = calendar.querySelectorAll("a");
            allLinks.forEach((elem) => {
                elem.addEventListener("click", () => {
                    layer.classList.add("js--hidden");
                });
            });
        });
    });
    // Убирание подложки
}

function formattedDate(date) {
    var month = String(date.getMonth() + 1);
    var day = String(date.getDate());
    var year = String(date.getFullYear());
    var year = year.replace("20", "");
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return `${day}.${month}.${year}`;
}
var dateNew = new Date();
console.log(formattedDate(dateNew));

$(function() {
    $.datepicker.regional["ru"] = {
        closeText: "Закрыть",
        prevText: "",
        nextText: "",
        currentText: "Сегодня",
        monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ],
        monthNamesShort: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ],
        dayNames: [
            "воскресенье",
            "понедельник",
            "вторник",
            "среда",
            "четверг",
            "пятница",
            "суббота",
        ],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
    };
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    var dateFormat = "dd.mm.yy",
        from = $("#blockingInputStart")
        .datepicker({
                inline: true,
                changeYear: true,
                gotoCurrent: true,
                dateFormat: "dd.mm.yy",
                minDate: 0,
                showAnim: "slideDown",
                numberOfMonths: 1,
            },
            $.datepicker.regional["ru"]
        )
        .on("change", function() {
            $("#blockingInputFinish").datepicker(
                "option",
                "minDate",
                getDate(this)
            );
        }),
        to = $("#blockingInputFinish").datepicker({
                inline: true,
                changeYear: true,
                gotoCurrent: true,
                showAnim: "slideDown",
                numberOfMonths: 1,
            },
            $.datepicker.regional["ru"]
        );

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
            console.log(date);
        }

        return date;
    }
});