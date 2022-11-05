class Theme {
	constructor(
		id,
		url,
		slug,
		name,
		description,
		primary,
		secondary,
		success,
		info,
		warning,
		danger,
		error,
		light,
		dark,
		textPrimary,
		textSecondary,
		textSuccess,
		textInfo,
		textWarning,
		textDanger,
		textError,
		textLight,
		textDark,
		backgroundPrimary,
		backgroundSecondary,
		backgroundSuccess,
		backgroundInfo,
		backgroundWarning,
		backgroundDanger,
		backgroundError,
		backgroundLight,
		backgroundDark
	) {
		this.id = id;
		this.url = url;
		this.slug = slug;
		this.name = name;
		this.description = description;
		this.primary = primary || '#0d6efd';
		this.secondary = secondary || '#6c757d';
		this.success = success || '#198754';
		this.info = info || '#0dcaf0';
		this.warning = warning || '#ffc107';
		this.danger = danger || '#fd7e14';
		this.error = error || '#dc3545';
		this.light = light || '#f8f9fa';
		this.dark = dark || '#212529';
		this.textPrimary = textPrimary || '#212529';
		this.textSecondary = textSecondary || '#6c757d';
		this.textSuccess = textSuccess || '#198754';
		this.textInfo = textInfo || '#0dcaf0';
		this.textWarning = textWarning || '#ffc107';
		this.textDanger = textDanger || '#fd7e14';
		this.textError = textError || '#dc3545';
		this.textLight = textLight || '#f8f9fa';
		this.textDark = textDark || '#212529';
		this.backgroundPrimary = backgroundPrimary || '#212529';
		this.backgroundSecondary = backgroundSecondary || '#6c757d';
		this.backgroundSuccess = backgroundSuccess || '#198754';
		this.backgroundInfo = backgroundInfo || '#0dcaf0';
		this.backgroundWarning = backgroundWarning || '#ffc107';
		this.backgroundDanger = backgroundDanger || '#fd7e14';
		this.backgroundError = backgroundError || '#dc3545';
		this.backgroundLight = backgroundLight || '#f8f9fa';
		this.backgroundDark = backgroundDark || '#212529';
	}

	toObject() {
		return { ...this };
	}

	toJson() {
		return JSON.stringify(this.toObject());
	}

	static fromObject(obj) {
		return new Theme(
			obj.id,
			obj.url,
			obj.slug,
			obj.name,
			obj.description,
			obj.primary,
			obj.secondary,
			obj.success,
			obj.info,
			obj.warning,
			obj.danger,
			obj.error,
			obj.light,
			obj.dark,
			obj.textPrimary,
			obj.textSecondary,
			obj.textSuccess,
			obj.textInfo,
			obj.textWarning,
			obj.textDanger,
			obj.textError,
			obj.textLight,
			obj.textDark,
			obj.backgroundPrimary,
			obj.backgroundSecondary,
			obj.backgroundSuccess,
			obj.backgroundInfo,
			obj.backgroundWarning,
			obj.backgroundDanger,
			obj.backgroundError,
			obj.backgroundLight,
			obj.backgroundDark
		);
	}

	static from(obj) {
		if (obj instanceof Theme) {
			return obj;
		}

		if (obj instanceof Object) {
			return Theme.fromObject(obj);
		}

		throw new Error('Unable to convert to Theme');
	}

	static fromApi(obj) {
		const {
			id,
			url,
			slug,
			name,
			description,
			primary,
			secondary,
			success,
			info,
			warning,
			danger,
			error,
			light,
			dark,
			text_primary: textPrimary,
			text_secondary: textSecondary,
			text_success: textSuccess,
			text_info: textInfo,
			text_warning: textWarning,
			text_danger: textDanger,
			text_error: textError,
			text_light: textLight,
			text_dark: textDark,
			background_primary: backgroundPrimary,
			background_secondary: backgroundSecondary,
			background_success: backgroundSuccess,
			background_info: backgroundInfo,
			background_warning: backgroundWarning,
			background_danger: backgroundDanger,
			background_error: backgroundError,
			background_light: backgroundLight,
			background_dark: backgroundDark,
		} = obj;

		return Theme.fromObject({
			id,
			url,
			slug,
			name,
			description,
			primary,
			secondary,
			success,
			info,
			warning,
			danger,
			error,
			light,
			dark,
			textPrimary,
			textSecondary,
			textSuccess,
			textInfo,
			textWarning,
			textDanger,
			textError,
			textLight,
			textDark,
			backgroundPrimary,
			backgroundSecondary,
			backgroundSuccess,
			backgroundInfo,
			backgroundWarning,
			backgroundDanger,
			backgroundError,
			backgroundLight,
			backgroundDark,
		});
	}
}

export default Theme;
