import Item from './item';

export class Card extends Item {
	constructor(
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
		props,
		header,
		body,
		footer
	) {
		super(
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
			props
		);

		this.type = 'card';
		this.header = header;
		this.body = body;
		this.footer = footer;
	}

	static from(obj) {
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
			header,
			body,
			footer,
		} = obj;
		return new Card(
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
			header,
			body,
			footer
		);
	}
}

export default Card;
