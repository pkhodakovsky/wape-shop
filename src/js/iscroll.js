import IScroll from 'iscroll';

export default class {
	constructor(element = null, options = {}) {
		if (!element) {
			throw '\'Element\' cannot be undefined';
		}
		this.element = element;
		this.iscroll = new IScroll(this.element, options);
	}
}