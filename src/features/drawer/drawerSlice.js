import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	url: '',
	slug: '',
	items: [],
	name: '',
	title: '',
	style: {},
	activeItem: null,
};

const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setActiveItem: (state, action) => {
			state.activeItem = action.payload;
		},

		setDrawer: (state, action) => {
			const { id, url, slug, items, name, title, style, htmlClasses } =
				action.payload;

			state.id = id;
			state.url = url;
			state.slug = slug;
			state.items = items;
			state.name = name;
			state.title = title;
			state.style = style;
			state.htmlClasses = htmlClasses;
		},

		toggleDrawer(state) {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { setDrawer, setActiveItem, toggleDrawer } = drawerSlice.actions;

export default drawerSlice;
