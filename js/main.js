var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // slidesPerView: 1,
    loop: true,
    // slidesPerView: "auto",
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
  });


  function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


    let menuIcon = document.querySelector(".menu-icon");
    const mobileNav = document.querySelector('.mobile-nav');

menuIcon.onclick = function() {
    menuIcon.classList.toggle("menu-icon-active");
    mobileNav.classList.toggle('mobile-nav--active');
}

