let fullScreenHeight = document.documentElement.clientHeight;
let banner = document.getElementsByClassName('banner')[0];
let bannerChild = banner.children;
banner.style.height = fullScreenHeight + 'px';
for (let item of bannerChild) {
  if ( item.tagName !== 'SPAN'  ) {
    item.style.height = fullScreenHeight + 'px';
  }
}


// 监听滚动事件
window.addEventListener("scroll", function() {
  let scrollTop = document.documentElement.scrollTop;
  let header = document.querySelector('.header');
  let bannerHeight = document.querySelector('.banner').clientHeight - header.clientHeight|| 100;
  let clientWidth = document.body.clientWidth; 
  if(scrollTop >= bannerHeight && clientWidth >= 1024){
    header.classList.add('white-desktop');
  }else{
    header.classList.remove('white-desktop');
  }
});


 // swiper 
 window.onload = function () {
  let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
  });
}

// 为语言按钮绑定点击事件
$('#header-lang').click(()=>{
  if($('.lang-box').hasClass('langBox-show')) {
    $('.lang-box').slideUp(200).removeClass("langBox-show");
    $('#header-lang').removeClass("lang-show");
  } else {
    $('.lang-box').slideDown(200).addClass("langBox-show");
    $('#header-lang').addClass("lang-show");
  }
})

// 为头部添加功能按钮监听事件
$('.header-menu-toggle').click(()=>{
  if($('.header-menu-toggle').hasClass('toggle-show')) {
    $('.header-menu-toggle').removeClass("toggle-show");
  } else {
    $('.header-menu-toggle').addClass("toggle-show");
  }
})

