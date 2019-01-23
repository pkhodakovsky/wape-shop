import IScroll from './src/js/iscroll';
import TmRipple from './src/js/tmripple';

function initScrolls() {
	const liquidsEl = document.getElementById('liquids');
	const liquidsScroll = new IScroll(liquidsEl, {
		scrollX: true,
		scrollY: false,
		mouseWheel: true,
	});
	window.liquidsScroll = liquidsScroll;
}

function initTmripples() {
	const tmripples = new TmRipple('#partner', {
		color: '#fff',
	});
}

initScrolls();
initTmripples();