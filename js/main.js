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
  let dBIWhite = document.querySelector('.drivenByImpactWhite');
  let dBIRed = document.querySelector('.drivenByImpactRed');
  let header = document.querySelector('.header');

  if(scrollTop >= 200){

  }
});
