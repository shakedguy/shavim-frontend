import Item from './item';

export class Label extends Item {
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
		html_classes,
		props,
		text,
		fontSize
	) {
		super(
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
			html_classes,
			props
		);

		this.type = 'label';
		this.text = text;
		this.fontSize = fontSize;
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
			text,
			font_size,
		} = obj;
		return new Label(
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
			text,
			font_size
		);
	}
}
export default Label;
