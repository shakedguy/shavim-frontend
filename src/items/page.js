class Page {
	constructor(
		id,
		url,
		path,
		slug,
		name,
		permissions,
		appBarTitle,
		items,
		style,
		htmlClasses
	) {
		this.id = id;
		this.url = url;
		this.path = path;
		this.slug = slug;
		this.name = name;
		this.permissions = permissions;
		this.appBarTitle = appBarTitle;
		this.items = [...items];
		this.style = style || {};
		this.htmlClasses = htmlClasses || '';
	}

	toObject() {
		return { ...this };
	}

	static fromObject({
		id,
		url,
		path,
		slug,
		name,
		permissions,
		appBarTitle,
		items,
		style,
		htmlClasses,
	}) {
		return new Page(
			id,
			url,
			path,
			slug,
			name,
			permissions,
			appBarTitle,
			items,
			style,
			htmlClasses
		);
	}

	static fromApi(data) {
		const {
			id,
			url,
			path,
			slug,
			name,
			permissions,
			app_bar_title,
			items,
			style,
			html_classes,
		} = data;
		return new Page(
			id,
			url,
			path,
			slug,
			name,
			permissions,
			app_bar_title,
			items,
			JSON.parse(style),
			html_classes
		);
	}

	static from(data) {
		if (data instanceof Page) {
			return data;
		}

		if (data instanceof Object) {
			return Page.fromObject(data);
		}

		if (data instanceof Array) {
			return data.map(Page.from);
		}

		return null;
	}
}

export default Page;
