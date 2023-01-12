const htmlDom = document.querySelector('html');
const menuBtn = document.querySelector('.header-wrap #nav-wrap .menu-btn');
const menuNavWrap = document.getElementById('nav-wrap');

function menuHandler(e) {
  e.preventDefault();
  let flag = menuNavWrap.className;

  if (flag === 'active') {
    menuNavWrap.classList.remove('active');
    htmlDom.classList.remove('fixed');
    console.log('Open!');
  } else {
    menuNavWrap.classList.add('active');
    htmlDom.classList.add('fixed');
    console.log('Close!');
  }
}
menuBtn.addEventListener('click', menuHandler);

jQuery(document).ready(function() {
  // Start..
  
});