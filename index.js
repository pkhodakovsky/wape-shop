import Hammer from 'hammerjs';
import IScroll from './src/js/iscroll';
import TmRipple from './src/js/tmripple';

const POPUP_VISIBLE_CLASS = 'visible';

function documentPreventDefault(event) {
	const mc = new Hammer(document);
	mc.on('pan', event => event.preventDefault());
}

function initScrolls() {
	initLiquidsScroll();
}

function initLiquidsScroll() {
	const liquidsEl = document.getElementById('liquids');
	const liquidsScroll = new IScroll(liquidsEl, {
		scrollX: true,
		scrollY: false,
		mouseWheel: true,
		preventDefault: false,
	});
}

function initTmripples() {
	const tmripples = new TmRipple('#becomePartner', {
		color: '#fff',
	});
}

function initPopups() {
	function openPopupHandler(event) {
		const popupId = this.dataset.openPopupName;
		popupWrapper.classList.add(POPUP_VISIBLE_CLASS);
		popupWrapper.querySelector(`[data-popup-name="${popupId}"]`).classList.add(POPUP_VISIBLE_CLASS);
	}

	function closePopupHandler(event) {
		const popupId = this.dataset.closePopupName;
		popupWrapper.classList.remove(POPUP_VISIBLE_CLASS);
		popupWrapper.querySelector(`[data-popup-name="${popupId}"]`).classList.remove(POPUP_VISIBLE_CLASS);
	}

	const popupWrapper = document.getElementById('popups');
	const popupOpenButtons = document.querySelectorAll('[data-open-popup-name]');
	const popupCloseButtons = document.querySelectorAll('[data-close-popup-name]');
	popupOpenButtons.forEach(buttonEl => {
		const mc = new Hammer(buttonEl);
		mc.on('tap', openPopupHandler.bind(buttonEl));
	});
	popupCloseButtons.forEach(buttonEl => {
		const mc = new Hammer(buttonEl);
		mc.on('tap', closePopupHandler.bind(buttonEl));
	});
}

documentPreventDefault();
initScrolls();
initTmripples();
initPopups();