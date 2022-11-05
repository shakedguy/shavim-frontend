import Icon from './icon';

export class DrawerItem {
	constructor(id, href, icon, label) {
		this.id = id;
		this.href = href;
		this.label = label;
		this.icon = Icon.fromApi(icon).toObject();
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
		const { id, href, icon, label } = obj;
		return new DrawerItem(id, href, icon, label);
	}

	static fromObject(obj) {
		const { id, href, icon, label } = obj;

		return new DrawerItem(id, href, icon, label);
	}

	static fromApi(obj) {
		const { id, href, icon, label } = obj;
		return new DrawerItem(id, href, icon, label);
	}
	static from(obj) {
		if (obj instanceof DrawerItem) {
			return obj;
		}

		if (obj instanceof Object) {
			return DrawerItem.fromObject(obj);
		}
		return null;
	}
}

export default DrawerItem;
