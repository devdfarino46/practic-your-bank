"use strict";

var burgerBtn = document.querySelector('.burger-btn');
var menu = document.querySelector('.menu');
var passwInputs = document.querySelectorAll('.input_password');
var exchange = document.querySelector('.exchange');
var tabs = document.querySelectorAll('.tabs');
var postTabs = document.querySelectorAll('.post-tabs');
var faq = document.querySelector('.faq');
var testim = document.querySelector('.testim');
if (burgerBtn && menu) {
  burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('_active');
    burgerBtn.classList.toggle('_active');
  });
}
passwInputs.forEach(function (input) {
  if (input) {
    var btn = input.querySelector('button');
    var inputEl = input.querySelector('input');
    btn.addEventListener('click', function () {
      inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    });
  }
});
if (exchange) {
  var input = exchange.querySelectorAll('.exchange__input input');
  var INR = 31520; // 1 USD = 31520 INR

  var rounded = function rounded(value) {
    return +value.toFixed(3);
  };
  input[0].addEventListener('input', function (ev) {
    input[1].value = rounded(input[0].value / INR);
  });
}
tabs.forEach(function (tab) {
  var tabBtns = tab.querySelectorAll('.tabs__btns .btn');
  tabBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function (ev) {
      if (!btn.classList.contains('_active')) {
        console.log(22);
        var activeBtn = tab.querySelector('.tabs__btns .btn._active');
        var activeContent = tab.querySelector('.tabs__content._active');
        activeBtn.classList.remove('_active');
        activeContent.classList.remove('_active');
        var attribute = btn.getAttribute('data-tab');
        var tabContent = tab.querySelector(".tabs__content[data-tab=\"".concat(attribute, "\"]"));
        btn.classList.add('_active');
        tabContent.classList.add('_active');
      }
    });
  });
});
postTabs.forEach(function (tab) {
  var tabBtns = tab.querySelectorAll('.post-tabs__btn');
  tabBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function (ev) {
      var activeBtn = tab.querySelector('.post-tabs__btn._active');
      var activeContent = tab.querySelector('.post-tabs__content._active');
      activeBtn.classList.remove('_active');
      activeContent.classList.remove('_active');
      var attribute = btn.getAttribute('data-tab');
      var tabContent = tab.querySelector(".post-tabs__content[data-tab=\"".concat(attribute, "\"]"));
      btn.classList.add('_active');
      tabContent.classList.add('_active');
    });
  });
});
if (faq) {
  var btn = faq.querySelector('.faq__btn');
  var list = faq.querySelector('.faq__list');
  btn.addEventListener('click', function (ev) {
    list.classList.add('_opened');
    btn.setAttribute('disabled', '');
  });
}
if (testim) {
  var sliders = testim.querySelectorAll('.testim__slider');
  sliders.forEach(function (sliderSelector) {
    var btns = sliderSelector.querySelectorAll('.testim__slider-btn');
    var slider = new Swiper(sliderSelector.querySelector('.swiper'), {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 40,
      allowTouchMove: false,
      loop: true,
      breakpoints: {
        1420: {
          slidesPerView: 3,
          spaceBetween: 60
        }
      },
      navigation: {
        prevEl: btns[0],
        nextEl: btns[1]
      }
    });
  });
}
//# sourceMappingURL=main.js.map
