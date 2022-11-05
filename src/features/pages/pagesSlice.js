import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	all: [],
	slugs: [],
	currentPage: {
		id: null,
		url: null,
		path: null,
		slug: null,
		name: null,
		title: null,
		permissions: null,
		appBarTitle: null,
		style: {},
		labels: [],
		papers: [],
		linkButtons: [],
		modals: [],
		boxes: [],
		stacks: [],
		forms: [],
		steppers: [],
	},
};

const pagesSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setAllPages: (state, action) => {
			state.all = action.payload;
		},

		setSlugs: (state, action) => {
			state.slugs = action.payload;
		},

		setCurrentPage: (state, action) => {
			const page = action.payload;

			const {
				id,
				url,
				path,
				slug,
				name,
				title,
				permissions,
				app_bar_title,
				items,
				style,
				labels,
				papers,
				linkButtons,
				modals,
				boxes,
				stacks,
				forms,
				steppers,
			} = page;
			state.currentPage.id = id;
			state.currentPage.url = url;
			state.currentPage.path = path;
			state.currentPage.slug = slug;
			state.currentPage.name = name;
			state.currentPage.title = title;
			state.currentPage.permissions = permissions;
			state.currentPage.appBarTitle = app_bar_title;
			state.currentPage.items = items;
			state.currentPage.style = style;
			state.currentPage.papers = papers;
			state.currentPage.labels = labels;
			state.currentPage.linkButtons = linkButtons;
			state.currentPage.modals = modals;
			state.currentPage.boxes = boxes;
			state.currentPage.stacks = stacks;
			state.currentPage.forms = forms;
			state.currentPage.steppers = steppers;
		},

		setAppBarTitle(state, action) {
			state.currentPage.appBarTitle = action.payload;
		},

		setStyle(state, action) {
			state.currentPage.style = action.payload;
		},

		setStyleProperty(state, action) {
			const { key, value } = action.payload;
			state.currentPage.style[key] = value;
		},
	},
});

export const {
	setCurrentPage,
	setAppBarTitle,
	setStyle,
	setStyleProperty,
	setAllPages,
	setSlugs,
} = pagesSlice.actions;

export default pagesSlice;
