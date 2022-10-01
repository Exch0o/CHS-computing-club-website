const menu = document.querySelector('#moblie-menu')

const menuLinks = document.querySelector('.navbar__menu')

var imgWidth = document.getElementById('cloud')
imgWidth.style.width = screen.width * 0.987 + 'px';

var logoWidth = document.getElementById('logo')
logoWidth.style.margin-left = screen.width * 0.5 + "px";

var classPictureWidth = document.getElementById('ClassPicture')
classPictureWidth.style.height = screen.width * 0.5 + "px";
menu.addEventListener('click', Toggle())
function Toggle()
{
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}