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

const swiper = new Swiper('.swiper', {
 
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
});

// faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');
item.addEventListener('click', () => {
    const isOpen =item.classList.toggle('open');
    const iconClass =isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
});

  
});