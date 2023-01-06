const swiper = new Swiper('.slider', {
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
    }
});

$('.collapse__title').on('click', (el)=>{
    el.target.parentNode.classList.toggle("open");
});