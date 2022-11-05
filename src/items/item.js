import { v4 as uuid } from 'uuid';
import Label from './label';
import Card from '../components/card/Card';

export class Item {
	static TYPES = {
		CARD: 'card',
		LABEL: 'label',
	};
	constructor(
		id,
		type,
		url,
		path,
		slug,
		relatedPage,
		x,
		y,
		width,
		height,
		style,
		htmlClasses,
		props
	) {
		this.id = id || uuid();
		this.type = type;
		this.url = url;
		this.path = path || `/api/items/${this.id}`;
		this.slug = slug;
		this.relatedPage = relatedPage;
		this.x = x || 150;
		this.y = y || 150;
		this.width = width || 150;
		this.height = height || 150;
		this.style = style || {};
		this.htmlClasses = htmlClasses || {};
		this.props = props || {};
	}

	toObject() {
		return {
			...this,
		};
	}

	toJSON() {
		return JSON.stringify(this.toObject());
	}

	static create(obj) {
		const {
			id,
			type,
			url,
			path,
			slug,
			relatedPage,
			x,
			y,
			width,
			height,
			style,
			htmlClasses,
			props,
		} = obj;
		return new Item(
			id,
			type,
			url,
			path,
			slug,
			relatedPage,
			x,
			y,
			width,
			height,
			style,
			htmlClasses,
			props
		);
	}

	static fromApi(obj) {
		const {
			id,
			type,
			url,
			path,
			slug,
			related_page,
			x,
			y,
			width,
			height,
			style,
			html_classes,
			props,
		} = obj;
		return new Item(
			id,
			type,
			url,
			path,
			slug,
			related_page,
			x,
			y,
			width,
			height,
			style,
			html_classes,
			props
		);
	}
	static from(obj) {
		if (obj instanceof Item) return obj;
		if (typeof obj === 'label') return Label.from(obj);
		if (typeof obj === 'card') return Card.from(obj);
		return null;
	}
}

export default Item;
