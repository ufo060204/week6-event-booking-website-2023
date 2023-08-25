const topSwiper = new Swiper(".topSwiper", {
  
  //避免使用者移動到
  allowTouchMove: false,
  
  //能呈現幾個.swiper-slide
  slidesPerView: "auto",
    
  //跑馬燈的速度(毫秒)
  speed: 50000,
    
  //是否重複
  loop: true,
  
  autoplay: {
    
    //到下一個幻燈片時，停下的時間
    delay: 0,    
    
    //避免點擊造成跑馬燈失效，視情況增加
    disableOnInteraction: false,
    
  },
});

const bottomSwiper = new Swiper(".bottomSwiper", {
  
  //避免使用者移動到
  allowTouchMove: false,
  
  //能呈現幾個.swiper-slide
  slidesPerView: "auto",
    
  //跑馬燈的速度(毫秒)
  speed: 50000,
    
  //是否重複
  loop: true,
  
  autoplay: {
    
    //到下一個幻燈片時，停下的時間
    delay: 0,    
    
    //避免點擊造成跑馬燈失效，視情況增加
    disableOnInteraction: false,

    reverseDirection: true,
    
  },
});