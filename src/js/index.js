import mobileNav from './modules/mobile-nav.js';
mobileNav();

import swiperTop from './modules/swiper-top.js';
swiperTop();

import funcMixItUp from './modules/mixitup.js';

if (document.querySelector('.gallery__inner')) {
	funcMixItUp();
}

import funcPopUp from './modules/video-popup.js';
funcPopUp();

import swiperContact from './modules/swiper.contact.js';
swiperContact();

import swiperBlog from './modules/swiper-blog.js';
swiperBlog();