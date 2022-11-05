import React from 'react';
import { createPortal } from 'react-dom';

const element = document.getElementById('global-portal-main');

const GlobalMainPortal = ({ isOpen, children }) => {
	if (!isOpen) {
		element.style.display = 'none';
		return null;
	}
	element.style.display = 'block';

	return createPortal(<>{children}</>, element);
};

export default GlobalMainPortal;
