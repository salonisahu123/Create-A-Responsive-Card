const swiper = new Swiper('.wrapper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  brakpoints:{
    0:{
      slidesPerView : 1,
    },
    768:{
      slidesPerView : 2,
    },
   1024:{
      slidesPerView : 3,
    }
  }
});