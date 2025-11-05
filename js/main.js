const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowRightClass = 'ri-arrow-right-s-line';
const arrowLeftClass = 'ri-arrow-left-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcn.classList.toggle(arrowRightClass);
        closeBtnIcn.classList.toggle(arrowLeftClass);
    } 
});