const swiper =new Swiper('.procedures-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },

  pagination: {
    el: '.procedures-swiper .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.carousel-button__arrow--next',
    prevEl: '.carousel-button__arrow--prev',
  },
});
  


  
  

 