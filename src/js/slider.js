const swiper = new Swiper('.slider', {
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView:1,
      },
      600: {
          slidesPerView:2,
      },
      1400: {
          slidesPerView:3,
      },
    },
});

$('.collapse__title').on('click', (el)=>{
    el.target.parentNode.classList.toggle("open");
});