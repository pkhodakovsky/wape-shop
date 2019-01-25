import touch from 'touches';
import Hammer from 'hammerjs';
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
	const popupOpenButtons = document.querySelectorAll('[data-open-popup-name]');
	const popupCloseButtons = document.querySelectorAll('[data-close-popup-name]');
	popupOpenButtons.forEach(buttonEl => {
		// handleTap(buttonEl, openPopupHandler);
		const mc = new Hammer(buttonEl);
		mc.on('tap', openPopupHandler.bind(buttonEl));
	});
	popupCloseButtons.forEach(buttonEl => {
		// handleTap(buttonEl, closePopupHandler);
		const mc = new Hammer(buttonEl);
		mc.on('tap', closePopupHandler.bind(buttonEl));
	});
}

function handleTap(element, handler) {
	let isMoved = false;
	let isTouched = false;
	let possibleDiff = 20;
	let prevPos = {
		x: 0,
		y: 0,
	};

	function startHandler(event, pos) {
		event.preventDefault();
		isMoved = false;
		isTouched = true;
		prevPos = {
			x: pos[0],
			y: pos[1],
		};
	}

	function moveHandler(event, pos) {
		if (!isTouched) {
			return;
		}
		isMoved = true;
	}

	function endHandler(event, pos) {
		isTouched = false;
		if (isMoved) {
			// if (Math.abs(pos[0] - prevPos.x) > possibleDiff || Math.abs(pos[1] - prevPos.y) > possibleDiff) {
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

touch().on('move', event => event.preventDefault());