const swiper = new Swiper('.swiper', {

  autoplay: {
     delay: 10000,
     disableOnInteraction: false
   },

   spaceBetween: 10,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: false,
          clickable: false,
    },

  

});