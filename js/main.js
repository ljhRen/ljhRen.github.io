const htmlDom = document.querySelector('html');
const menuBtn = document.querySelector('.header-wrap #nav-wrap .menu-btn');
const menuNavWrap = document.getElementById('nav-wrap');
let winWidth = window.innerWidth;

function menuHandler(e) {
  e.preventDefault();
  let flag = menuNavWrap.className;

  if (flag === 'active') {
    menuNavWrap.classList.remove('active');
    htmlDom.classList.remove('fixed');
    console.log('Close!');
  } else {
    menuNavWrap.classList.add('active');
    htmlDom.classList.add('fixed');
    console.log('Open!');
  }
}
menuBtn.addEventListener('click', menuHandler);

window.addEventListener('resize', () => {
  // window Width
  winWidth = window.innerWidth;

  if (winWidth > 769) {
    menuNavWrap.classList.remove('active');
    htmlDom.classList.remove('fixed');
  }

});

jQuery(document).ready(function() {
  // Start..
  
});