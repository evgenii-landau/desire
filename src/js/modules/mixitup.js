import mixitup from 'mixitup';

function funcMixItUp() {
	let mixer = mixitup('.gallery__inner', {
		selectors: {
			target: '.gallery__items'
		},
		animation: {
			duration: 300
		},
		load: {
			filter: '.living'
	  	} // Начальная точка
	});
}

export default funcMixItUp;
