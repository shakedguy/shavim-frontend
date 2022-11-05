import { v4 as uuid } from 'uuid';
import Label from './label';
import Card from '../components/card/Card';

export class Drawer {
	constructor(id, url, slug, items, name, title, style, htmlClasses) {
		this.id = id;
		this.url = url;
		this.slug = slug;
		this.items = items;
		this.name = name;
		this.title = title;
		this.style = style;
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
		const { id, url, slug, items, name, title, style, htmlClasses } = obj;
		return new Drawer(id, url, slug, items, name, title, style, htmlClasses);
	}

	static fromObject(obj) {
		const { id, url, slug, items, name, title, style, htmlClasses } = obj;

		return new Drawer(id, url, slug, items, name, title, style, htmlClasses);
	}

	static fromApi(obj) {
		const { id, url, slug, items, name, title, style, html_classes } = obj;

		return new Drawer(id, url, slug, items, name, title, style, html_classes);
	}
	static from(obj) {
		if (obj instanceof Drawer) {
			return obj;
		}

		if (obj instanceof Object) {
			return Drawer.fromObject(obj);
		}
		return null;
	}
}

export default Drawer;
