import { createSlice } from '@reduxjs/toolkit';
import Theme from '../../utils/theme';

const prototipeTheme = new Theme();

const initialState = {
	light: prototipeTheme.toObject(),
	dark: prototipeTheme.toObject(),
	current: prototipeTheme.toObject(),
	isDark: false,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setLight: (state, action) => {
			state.light = Theme.from(action.payload).toObject();
		},

		setDark: (state, action) => {
			state.dark = Theme.from(action.payload).toObject();
		},

		setIsDark: (state, action) => {
			const isDark = action.payload;
			state.isDark = isDark;
			if (isDark) {
				state.current = state.dark;
			} else {
				state.current = state.light;
			}
		},

		setCurrent: (state, action) => {
			state.current = Theme.from(action.payload).toObject();
		},

		toggleIsDark: (state) => {
			const isDark = !state.isDark;
			state.isDark = isDark;
			if (isDark) {
				state.current = state.dark;
			} else {
				state.current = state.light;
			}
		},
	},
});

export const { setLight, setDark, setCurrent, setIsDark, toggleIsDark } =
	themeSlice.actions;

export default themeSlice;
