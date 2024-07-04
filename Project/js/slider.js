const width = document.querySelector('.first_page')
const par = width.offsetWidth;
if (par > 800){
  const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".js-arrow-next",
      prevEl: ".js-arrow-prev",
    },
  });
}
else if(par <= 800){
  const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".js-arrow-next",
      prevEl: ".js-arrow-prev",
    },
  });
}


  
