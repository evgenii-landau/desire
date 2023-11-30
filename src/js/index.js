import mobileNav from './modules/mobile-nav.js';
mobileNav();

import swiperTop from './modules/swiper-top.js';
swiperTop();

import funcMixItUp from './modules/mixitup.js';

if (window.location.pathname === '/about.html') {
	funcMixItUp();
}

import funcPopUp from './modules/video-popup.js';
funcPopUp();

import swiperContact from './modules/swiper.contact.js';
swiperContact();