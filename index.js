import touch from 'touches';
import IScroll from './src/js/iscroll';
import TmRipple from './src/js/tmripple';

const POPUP_VISIBLE_CLASS = 'visible';

function initScrolls() {
	const liquidsEl = document.getElementById('liquids');
	const liquidsScroll = new IScroll(liquidsEl, {
		scrollX: true,
		scrollY: false,
		mouseWheel: true,
		preventDefault: false,
	});
	window.liquidsScroll = liquidsScroll;
}

function initTmripples() {
	const tmripples = new TmRipple('#partner', {
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
	const popupOpenButtons = document.querySelectorAll('[data-open-popup-name');
	const popupCloseButtons = document.querySelectorAll('[data-close-popup-name');
	popupOpenButtons.forEach(buttonEl => {
		handleTap(buttonEl, openPopupHandler);
	});
	popupCloseButtons.forEach(buttonEl => {
		handleTap(buttonEl, closePopupHandler);
	});
}

function handleTap(element, handler) {
	let isMoved = false;
	let isTouched = false;

	function startHandler(event) {
		event.preventDefault();
		isMoved = false;
		isTouched = true;
	}

	function moveHandler(event) {
		if (!isTouched) {
			return;
		}
		isMoved = true;
	}

	function endHandler(event) {
		isTouched = false;
		if (isMoved) {
			isMoved = false;
			return;
		}
		isMoved = false;
		handler.call(element, event);
	}

	touch(element)
		.on('start', startHandler)
		.on('move', moveHandler)
		.on('end', endHandler);
}

initScrolls();
initTmripples();
initPopups();