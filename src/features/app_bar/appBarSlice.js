import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	uuid: null,
	url: null,
	path: null,
	slug: null,
	title: null,
	logo: null,
	brand: {},
	style: {},
	props: {},
	htmlClasses: 'navbar fixed-top',
	iconButton: 'navbar-toggler-icon',
	backgroundColor: '',
	rightItems: [],
	leftItems: [],
};

const appBarSlice = createSlice({
	name: 'appBar',
	initialState,
	reducers: {
		setAppBar: (state, action) => {
			state.id = action.payload.id;
			state.uuid = action.payload.uuid;
			state.url = action.payload.url;
			state.path = action.payload.path;
			state.slug = action.payload.slug;
			state.title = action.payload.title;
			state.logo = action.payload.logo;
			state.style = action.payload.style;
			state.props = action.payload.props;
			state.htmlClasses = action.payload.htmlClasses;
			state.iconButton = action.payload.iconButton;
			state.backgroundColor = action.payload.backgroundColor;
			state.rightItems = action.payload.rightItems;
			state.leftItems = action.payload.leftItems;
		},

		setAppBarBackgroundColor(state, action) {
			state.backgroundColor = action.payload;
		},

		setAppBarStyle(state, action) {
			state.style = action.payload;
		},
	},
});

export const { setAppBar, setAppBarBackgroundColor, setAppBarStyle } =
	appBarSlice.actions;

export default appBarSlice;
