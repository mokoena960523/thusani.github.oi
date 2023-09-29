let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
	menu.classList.toggle('active');
}


window.onscroll = () => {
	menu.classList.remove('active');
}

AOS.init({
   duration: 400,
   delay: 200,
});