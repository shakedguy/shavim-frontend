export class Icon {
	constructor(id, uuid, name, path, slug, url, htmlClasses) {
		this.id = id;
		this.uuid = uuid;
		this.name = name;
		this.path = path;
		this.slug = slug;
		this.url = url;
		this.htmlClasses = htmlClasses;
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
		const { id, uuid, name, path, slug, url, htmlClasses } = obj;
		return new Icon(id, uuid, name, path, slug, url, htmlClasses);
	}

	static fromObject(obj) {
		const { id, uuid, name, path, slug, url, htmlClasses } = obj;
		return new Icon(id, uuid, name, path, slug, url, htmlClasses);
	}

	static fromApi(obj) {
		const { id, uuid, name, path, slug, url, html_classes } = obj;
		return new Icon(id, uuid, name, path, slug, url, html_classes);
	}
	static from(obj) {
		if (obj instanceof Icon) {
			return obj;
		}

		if (obj instanceof Object) {
			return Icon.fromObject(obj);
		}
		return null;
	}
}

export default Icon;
