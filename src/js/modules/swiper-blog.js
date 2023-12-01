import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperBlog() {
	const swiper = new Swiper('.blog__swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// If we need pagination
		pagination: {
			el: '.blog__swiper-pagination',
			type: 'fraction', // цифры пагинация
		},
		simulateTouch: true,
		// Чувствительность свайпа (0 - отключит на всех устройствах)
		touchRatio: 1,
		// Угол срабатывания свайпа
		touchAngle: 45,
		// Вид курсора (руки)
		grabCursor: true,
		keyboard: {
         //Включить/выключить
         enabled: true,
         //Включить/выключить
         //только когда слайдер
         //в пределах вьюпорта
         onlyInViewport: true,
         //Включить/выключить
         //управление клавишами
         //pageUp, pageDown
         pageUpDown: true,
      },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		 },
	});
}

// function swiperBlog() {
// 	const swiper = new Swiper('.blog__swiper', {
// 		// Optional parameters
// 		direction: 'horizontal',
// 		loop: true,
	
// 		// If we need pagination
// 		pagination: {
// 			el: '.blog__swiper-pagination',
// 			type: 'fraction', // цифры пагинация
// 		},
// 		simulateTouch: true,
// 		// Чувствительность свайпа (0 - отключит на всех устройствах)
// 		touchRatio: 1,
// 		// Угол срабатывания свайпа
// 		touchAngle: 45,
// 		// Вид курсора (руки)
// 		grabCursor: true,
// 		keyboard: {
//          //Включить/выключить
//          enabled: true,
//          //Включить/выключить
//          //только когда слайдер
//          //в пределах вьюпорта
//          onlyInViewport: true,
//          //Включить/выключить
//          //управление клавишами
//          //pageUp, pageDown
//          pageUpDown: true,
//       },
// 		navigation: {
// 			nextEl: '.blog__swiper-btn-next',
// 			prevEl: '.sblog__swiper-btn-prev',
// 		},
// 	});
// }

export default swiperBlog;