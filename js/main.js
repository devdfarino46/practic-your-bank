const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');

if (burgerBtn && menu) {
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('_active');
        burgerBtn.classList.toggle('_active');
    });
}