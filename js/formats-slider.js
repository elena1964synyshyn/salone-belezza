// const swiper =new Swiper('.procedures-swiper', {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,

//   breakpoints: {
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '.carousel-button__arrow--next',
//     prevEl: '.carousel-button__arrow--prev',
//   },
// });
  

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button__arrow--next',
    prevEl: '.carousel-button__arrow--prev',
  },
});
  
  

 