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
window.addEventListener("scroll", function(event) {
  let scrollTop = document.documentElement.scrollTop;
  let header = document.querySelector('.header');
  let bannerHeight = document.querySelector('.banner').clientHeight - header.clientHeight|| 100;
  if(scrollTop >= bannerHeight){
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
let langBtn = document.querySelector('#header-lang');
$('#header-lang').click(()=>{
  if($('.lang-box').hasClass('langBox-show')) {
    $('.lang-box').slideUp().removeClass("langBox-show");
  } else {
    $('.lang-box').slideDown().addClass("langBox-show");
  }
  
  console.log("123");
})
// langBtn.addEventListener('click', ()=> {
//   // let langBox = document.querySelector('.lang-box');
//   $('.lang-box').toggle();
//   // if ( langBox.classList.contains('langBox-show') ) {
//   //   // langBox.style.height = '0';
//   //   $('.lang-box').slideUp()
//   //   langBox.classList.remove('langBox-show');
//   // } else {
//   //   // langBox.style.height = 'auto';
//   //   $('.lang-box').slideDown()
//   //   langBox.classList.add('langBox-show');
//   // }
  
  
// })

