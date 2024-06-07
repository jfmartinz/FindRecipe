let menu = document.getElementById('menu');
let navMobile = document.getElementById('navbar-mobile');
let close = document.getElementById('close');

menu.addEventListener('click', function () {
	navMobile.classList.toggle('showNav');
});

document.addEventListener('click', function (event) {
	if (!menu.contains(event.target) && !navMobile.contains(event.target)) {
		navMobile.classList.remove('showNav');
	}
});

// Sticky Navigation Bar On Scroll
window.addEventListener('scroll', function () {
	const header = document.getElementById('headerId');
	header.classList.toggle('sticky', window.scrollY > 0);
});
