import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperTop() {
	const swiper = new Swiper('.top__swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// If we need pagination
		pagination: {
			el: '.top__swiper-pagination',
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
		


	});
}

export default swiperTop;