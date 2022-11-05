export class appBar {
	constructor(
		id = null,
		uuid = null,
		url = null,
		path = null,
		slug = null,
		title = null,
		style = {},
		props = {},
		htmlClasses = 'navbar fixed-top',
		iconButton = 'navbar-toggler-icon',
		backgroundColor = '',
		rightItems = [],
		leftItems = []
	) {
		this.id = id;
		this.uuid = uuid;
		this.url = url;
		this.path = path;
		this.slug = slug;
		this.title = title;
		this.style = style;
		this.props = props;
		this.htmlClasses = htmlClasses;
		this.iconButton = iconButton;
		this.backgroundColor = backgroundColor;
		this.rightItems = rightItems;
		this.leftItems = leftItems;
	}

	toObject() {
		return { ...this };
	}

	static fromApi(apiObject) {
		const {
			id,
			uuid,
			url,
			path,
			slug,
			title,
			style,
			props,
			html_classes,
			menu_icon_button,
			background_color,
			right_items,
			left_items,
		} = apiObject;

		return new appBar(
			id,
			uuid,
			url,
			path,
			slug,
			title,
			JSON.parse(style),
			JSON.parse(props),
			html_classes,
			menu_icon_button,
			background_color,
			right_items,
			left_items
		);
	}

	static fromObject(object) {
		return new appBar(
			object.id,
			object.uuid,
			object.url,
			object.path,
			object.slug,
			object.title,
			object.style,
			object.props,
			object.htmlClasses,
			object.iconButton,
			object.backgroundColor,
			object.items
		);
	}

	static from(object) {
		if (object instanceof appBar) {
			return object;
		}
		if (object instanceof Object) {
			return appBar.fromObject(object);
		}
		return new appBar();
	}
}

export default appBar;
