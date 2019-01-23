import tmripple from 'touchmyripple';

export default class {
	constructor(selectors = '', options = {}) {
		if (!selectors) {
			throw '\'Selector\' cannot be empty';
		}
		this.selectors = selectors;
		this.init(options);
	}

	init(options) {
		tmripple.attachToSelectors(Object.assign({}, options, { selectors: this.selectors }));
	}
}