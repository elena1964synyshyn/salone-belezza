const mobile = document.querySelector('.mobile-menu');
const modamobilelBtnOpen = document.querySelector('.mobile-btn-open');
const modamobilelBtnClose = document.querySelector('.mobile-btn-close');

const togglemobile = () => mobile.classList.toggle('is-open');

modamobilelBtnOpen.addEventListener('click', togglemobile);
modamobilelBtnClose.addEventListener('click', togglemobile);