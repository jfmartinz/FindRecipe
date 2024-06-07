// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	loop: true,

	autoplay: {
		delay: 2500,
		pauseOnMouseEnter: true, // pause autopaly when user interact to the carousel
	},
	slidesPerView: 1,
	spaceBetween: 30,

	// Responsiveness of the swiper
	breakpoints: {
		// >= 500px
		500: {
			slidesPerView: 1.8,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 80,
		},
		998: {
			slidesPerView: 4,
			spaceBetween: 100,
		},
	},

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
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});
