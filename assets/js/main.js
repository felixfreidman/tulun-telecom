"use strict";

// TODO: Полифил для всех ES6 функций JS
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: https://es5.github.io/#x15.4.4.18
// Полифил forech
if (!Array.prototype["forEach"]) {
  Array.prototype.forEach = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.forEach called on null or undefined");
    }

    var T, k; // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.

    var O = Object(this); // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).

    var len = O.length >>> 0; // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: https://es5.github.io/#x9.11

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    } // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.


    if (arguments.length > 1) {
      T = thisArg;
    } // 6. Let k be 0


    k = 0; // 7. Repeat, while k < len

    while (k < len) {
      var kValue; // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then

      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k]; // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.

        callback.call(T, kValue, k, O);
      } // d. Increase k by 1.


      k++;
    } // 8. return undefined

  };
} // Полифил innerWidth


window.getWindowSize = function () {
  if (window.innerWidth != undefined) {
    return [window.innerWidth, window.innerHeight];
  } else {
    var docBody = document.body,
        docEle = document.documentElement;
    return [Math.max(docEle.clientWidth, docBody.clientWidth), Math.max(docEle.clientHeight, docBody.clientHeight)];
  }
};

if (document.querySelector(".auth-form__recover")) {
  var recover_button = document.querySelector(".auth-form__recover");
  recover_button.addEventListener("click", function () {
    apply_form.classList.toggle("js--hidden");
    recover_form.classList.toggle("js--hidden");
  });
}

if (document.querySelector(".auth-form__continue")) {
  var confirm_button = document.querySelector(".auth-form__continue");
  confirm_button.addEventListener("click", function () {
    recover_form.classList.toggle("js--hidden");
    return_form.classList.toggle("js--hidden");
  });
}

if (document.querySelector(".form-apply-recover")) {
  var apply_form = document.querySelector(".form-apply-recover");
  apply_form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

if (document.querySelector(".form-recover-check")) {
  var recover_form = document.querySelector(".form-recover-check");
  recover_form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

if (document.querySelector(".form-return-login")) {
  var return_form = document.querySelector(".form-return-login");
}

if (document.querySelectorAll(".navigation-menu__item-link")) {
  var allLink = document.querySelectorAll(".navigation-menu__item-link");
  var currentLocation = window.location.href;
  var alltableArray = Array.prototype.slice.call(allLink);
  alltableArray.forEach(function (element) {
    var link = element.getAttribute("href");
    var formatedLink = link.replace("./", "");

    if (currentLocation.includes(formatedLink)) {
      element.classList.add("item--checked");
    }
  });
} // Операции с тарифами
// Сначала получим и выведем значение отмеченного option


if (document.getElementById("rateSelect")) {
  var selectInputField = document.getElementById("rateSelect");
  var selectInputLabel = document.querySelector(".rate-form__label");
  var allOptionsArray = document.querySelectorAll(".rate-form__option");
  var allOptionsArrayMod = Array.prototype.slice.call(allOptionsArray);
  var selectModalWindow = document.getElementById("rateModal");
  displaySelectValue(); // По клику меняем значение data-checked

  allOptionsArrayMod.forEach(function (element) {
    element.addEventListener("click", function () {
      uncheckEverySpan();
      element.setAttribute("data-checked", "checked");
      displaySelectValue();
      selectModalWindow.classList.remove("js--hidden");
      selectInputLabel.classList.toggle("js--rotate-arrow");
    });
  });
  selectInputField.addEventListener("click", function () {
    selectInputLabel.classList.toggle("js--rotate-arrow");
    selectModalWindow.classList.toggle("js--hidden");
  });
  selectModalWindow.addEventListener("mouseleave", function () {
    selectInputLabel.classList.toggle("js--rotate-arrow");
    selectModalWindow.classList.add("js--hidden");
  });
} // Передача data-checked значения в поле Select


function displaySelectValue() {
  var selectInputField = document.getElementById("rateSelect");
  var allOptionsArray = document.querySelectorAll(".rate-form__option");
  var allOptionsArrayMod = Array.prototype.slice.call(allOptionsArray);
  allOptionsArrayMod.forEach(function (element) {
    var checkedBool = element.getAttribute("data-checked");

    if (checkedBool == "checked") {
      var checkedValue = element.textContent;
      selectInputField.value = checkedValue;
    }
  });
}

function uncheckEverySpan() {
  var allOptionsArray = document.querySelectorAll(".rate-form__option");
  var allOptionsArrayMod = Array.prototype.slice.call(allOptionsArray);
  allOptionsArrayMod.forEach(function (newElement) {
    newElement.setAttribute("data-checked", "unchecked");
  });
} // Обработка формы поиска в боковом меню


if (document.querySelector(".search-section--form ")) {
  var sidebarSearchForm = document.querySelector(".search-section--form");
  var sidebarSearchInput = document.querySelector(".input-section__search-input");
  sidebarSearchForm.addEventListener("submit", function (event) {
    var searchValue = sidebarSearchInput.value;
    localStorage.setItem("searchResult", searchValue);
  });
} // Результаты поиска


if (document.getElementById("searchField")) {
  var searchFieldResult = document.getElementById("searchField");
  var searchResult = localStorage.getItem("searchResult");
  console.log(localStorage.getItem("searchResult"));
  searchFieldResult.value = searchResult;

  if (searchFieldResult.value == "Платеж") {
    document.getElementById("fullResult").classList.remove("js--hidden");
    document.getElementById("emptyResult").classList.add("js--hidden");
  }
} // Календарь для сортировки по платежам


if (document.getElementById("paysInputStart")) {
  // Добавление подложки
  var calendarLabels = document.querySelectorAll(".stats-form__label");
  var calendarLabelsArray = Array.prototype.slice.call(calendarLabels);
  calendarLabelsArray.forEach(function (element) {
    element.addEventListener("click", function () {
      var layer = document.querySelector(".calendar-layer");
      layer.addEventListener("click", function () {
        layer.classList.add("js--hidden");
      });
      element.addEventListener("click", function () {
        layer.classList.remove("js--hidden");
      });
      var calendar = document.querySelector(".ui-datepicker");
      var allLinks = calendar.querySelectorAll("td");
      var allLinksArray = Array.prototype.slice.call(allLinks);
      allLinksArray.forEach(function (elem) {
        if (!elem.classList.contains("ui-datepicker-unselectable")) {
          elem.addEventListener("click", function () {
            layer.classList.add("js--hidden");
          });
        }
      });
    });
  });
  var calendarInputs = document.querySelectorAll(".form__input-form__input");
  var calendarInputsArray = Array.prototype.slice.call(calendarInputs);
  calendarInputsArray.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      var layer = document.querySelector(".calendar-layer");
      layer.addEventListener("click", function () {
        layer.classList.add("js--hidden");
      });
      element.addEventListener("click", function () {
        layer.classList.remove("js--hidden");
      });
      var calendar = document.querySelector(".ui-datepicker");
      var allLinks = calendar.querySelectorAll("td");
      var allLinksArray = Array.prototype.slice.call(allLinks);
      allLinksArray.forEach(function (elem) {
        if (!elem.classList.contains("ui-datepicker-unselectable")) {
          elem.addEventListener("click", function () {
            layer.classList.add("js--hidden");
          });
        }
      });
    });
  }); // Убирание подложки

  $(function () {
    $.datepicker.regional["ru"] = {
      closeText: "Закрыть",
      prevText: "",
      nextText: "",
      currentText: "Сегодня",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ""
    };
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    var dateFormat = "dd.mm.yy",
        from = $("#paysInputStart").datepicker({
      inline: true,
      changeYear: true,
      gotoCurrent: true,
      dateFormat: "dd.mm.yy",
      minDate: 0,
      showAnim: "slideDown",
      numberOfMonths: 1
    }, $.datepicker.regional["ru"]).on("change", function () {
      $("#paysInputFinish").datepicker("option", "minDate", getDate(this));
    }),
        to = $("#paysInputFinish").datepicker({
      inline: true,
      changeYear: true,
      gotoCurrent: true,
      dateFormat: "dd.mm.yy",
      minDate: 0,
      showAnim: "slideDown",
      numberOfMonths: 1
    }, $.datepicker.regional["ru"]);

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
} // Календарь для блокировки


if (document.getElementById("blockingInputStart")) {
  // Добавление подложки
  var calendarLabels = document.querySelectorAll(".blocking-form__label");
  var allLinksArray = Array.prototype.slice.call(allLinks);
  var calendarLabelsArray = Array.prototype.slice.call(calendarLabels);
  calendarLabelsArray.forEach(function (element) {
    element.addEventListener("click", function () {
      var layer = document.querySelector(".calendar-layer");
      layer.addEventListener("click", function () {
        layer.classList.add("js--hidden");
      });
      element.addEventListener("click", function () {
        layer.classList.remove("js--hidden");
      });
      var calendar = document.querySelector(".ui-datepicker");
      var allLinks = calendar.querySelectorAll("td");
      var allLinksArray = Array.prototype.slice.call(allLinks);
      allLinksArray.forEach(function (elem) {
        if (!elem.classList.contains("ui-datepicker-unselectable")) {
          elem.addEventListener("click", function () {
            layer.classList.add("js--hidden");
          });
        }
      });
    });
  });
  var calendarInputs = document.querySelectorAll(".blocking-form__input");
  var calendarInputsArray = Array.prototype.slice.call(calendarInputs);
  calendarInputsArray.forEach(function (element) {
    element.addEventListener("focus", function () {
      console.log("entered");
      var layer = document.querySelector(".calendar-layer");
      layer.addEventListener("click", function () {
        layer.classList.add("js--hidden");
      });
      layer.classList.remove("js--hidden");
      var calendar = document.querySelector(".ui-datepicker");
      var allLinks = calendar.querySelectorAll("td");
      var allLinksArray = Array.prototype.slice.call(allLinks);
      allLinksArray.forEach(function (elem) {
        if (!elem.classList.contains("ui-datepicker-unselectable")) {
          elem.addEventListener("click", function () {
            layer.classList.add("js--hidden");
          });
        }
      });
    });
  }); // Убирание подложки

  $(function () {
    $.datepicker.regional["ru"] = {
      closeText: "Закрыть",
      prevText: "",
      nextText: "",
      currentText: "Сегодня",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ""
    };
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    var dateFormat = "dd.mm.yy",
        from = $("#blockingInputStart").datepicker({
      inline: true,
      changeYear: true,
      gotoCurrent: true,
      dateFormat: "dd.mm.yy",
      minDate: 0,
      showAnim: "slideDown",
      numberOfMonths: 1
    }, $.datepicker.regional["ru"]).on("change", function () {
      $("#blockingInputFinish").datepicker("option", "minDate", getDate(this));
    }),
        to = $("#blockingInputFinish").datepicker({
      inline: true,
      changeYear: true,
      gotoCurrent: true,
      dateFormat: "dd.mm.yy",
      minDate: 0,
      showAnim: "slideDown",
      numberOfMonths: 1
    }, $.datepicker.regional["ru"]);

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
}

if (document.querySelector(".header-section--mobile")) {
  console.log(window.innerWidth);
  console.log(window.getWindowSize()[0]);

  if (window.innerWidth <= 1200 || window.getWindowSize()[0] <= 1200) {
    var main = document.querySelector("main");
    main.style.marginTop = "50px";
  } else {
    document.querySelector(".header-section--mobile").classList.add("js--hidden");
  }
}

if (document.getElementById("openMenu")) {
  var mobileButtonOpen = document.getElementById("openMenu");
  var mobi;
  var mobileButtonClose = document.getElementById("closeMenu");
  var navigationMenu = document.querySelector(".navigation-section--mobile");
  mobileButtonOpen.addEventListener("click", function () {
    mobileButtonClose.classList.add("menu-open--opened");
    navigationMenu.classList.toggle("js--transformed");
  });
  mobileButtonClose.addEventListener("click", function () {
    navigationMenu.classList.toggle("js--transformed");
  });
} // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });