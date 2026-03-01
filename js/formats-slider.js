const swiper = new Swiper('.swiper-container', {
  loop: true,
   slidesPerView: 1,
  spaceBetween: 20,
    breakpoints: {
   
    
    480: {
      slidesPerView: 2,
      
    },
    
    768: {
      slidesPerView: 3,
      
    }
  }
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.carousel-button__arrow.carousel-button__arrow--next',
    prevEl: '.carousel-button__arrow.carousel-button__arrow--prev',
  },
  
});
  


  
  

 