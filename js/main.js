
let fullScreenHeight = document.documentElement.clientHeight;
let fullScreenWidth = document.documentElement.clientWidth;
let banner = document.getElementsByClassName('banner')[0];
if ( banner && fullScreenHeight ) {
  let bannerChild = banner.children;
  banner.style.height = fullScreenHeight + 'px';
  for (let item of bannerChild) {
    if ( item.tagName !== 'SPAN' ) {
      
      item.style.height = fullScreenHeight + 'px';

      if ( item.tagName === 'VIDEO' && fullScreenWidth !== 0 && fullScreenHeight !== 0) {
        // video宽高比1000/667
        console.log(item.tagName, fullScreenHeight, fullScreenWidth)
        if (fullScreenWidth / fullScreenHeight  > 1000 / 563) {
          item.style.cssText = `width: ${fullScreenWidth}px; height:auto ;`
        }else {
          item.style.cssText = `width: auto; height: ${fullScreenHeight}px ;`
        }
      }
    }
    
  }
}



// 监听滚动事件
window.addEventListener("scroll", function() {
  let scrollTop = document.documentElement.scrollTop;
  let header = document.querySelector('.header');
  let banner = document.querySelector('.banner');
  if ( header && banner ) {
    let bannerHeight = banner.clientHeight - header.clientHeight|| 100;
    let clientWidth = document.body.clientWidth; 
    if(scrollTop >= bannerHeight && clientWidth >= 1024){
      header.classList.add('white-desktop');
    }else{
      header.classList.remove('white-desktop');
    }
  }

  // 文章页面的监听事件
  let breadcrumb = document.querySelector('.article-region-breadcrumb');
  if ( breadcrumb && scrollTop >= 80 ) {
    breadcrumb.style.position = 'fixed';
  } else if ( breadcrumb && scrollTop < 80 ) {
    breadcrumb.style.position = 'relative';
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
    $('.header-middle-nav').hide();
    $('.header-menu-toggle').removeClass("toggle-show");
    $('#header-lang').addClass("lang-show");
  }
})

// 为头部添加功能按钮监听事件
$('.header-menu-toggle').click(()=>{
  if($('.header-menu-toggle').hasClass('toggle-show')) {
    $('.header-menu-toggle').removeClass("toggle-show");
    $('.header-middle-nav').slideUp(200);
  } else {
    $('.header-menu-toggle').addClass("toggle-show");
    $('.lang-box').slideUp(0).removeClass("langBox-show");
    $('#header-lang').removeClass("lang-show");
    $('.header-middle-nav').slideDown(200);
  }
})

// 联系我们 添加事件 
$('.small-ctn').click(()=>{
  console.log("click")
  $('.small-ctn').hide().css({right: '0'});
  $('.black-board').show();
  $('.contact-ctn').show();
  setTimeout(()=>{
    $('.contact-ctn').css({right: '0'})
  }, 0);
})
$('.black-board').click(()=>{
  $('.black-board').hide();
  $('.contact-ctn').hide().css({right: '-30px'});
  $('.small-ctn').show().css({right: '-10px'});
})

// 为文章分享按钮添加事件
$('.bds_share_btn').click(()=>{
  if ( $('.bds_share_btn').hasClass('show') ) {
    $('.bds_weixin').css({opacity:"0"}).hide(300);
    $('.bds_tsina').css({opacity:"0"}).hide(300);
    $('.bds_linkedin').css({opacity:"0"}).hide(300);
    $('.bds_share_btn').removeClass('show');
  } else {
    $('.bds_weixin').css({display: 'block'}).animate({opacity:"1"}, 300);
    $('.bds_tsina').css({display: 'block'}).animate({opacity:"1"}, 300);
    $('.bds_linkedin').css({display: 'block'}).animate({opacity:"1"}, 300);
    // setTimeout(()=>{
    //   $('.bds_weixin').css({opacity:"1"});
    //   $('.bds_tsina').css({opacity:"1"});
    //   $('.bds_linkedin').css({opacity:"1"});
    // }, 500)

    // $('.bds_weixin').show().animate({opacity:"1"}, 500);
    // $('.bds_tsina').show().animate({opacity:"1"}, 500);
    // $('.bds_linkedin').show().animate({opacity:"1"}, 500);
    $('.bds_share_btn').addClass('show');
  }
  // $('.bds_weixin').toggle(200);
  // $('.bds_tsina').toggle(200);
  // $('.bds_linkedin').toggle(200);
})

