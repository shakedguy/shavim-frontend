import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	termsModalIsOpen: false,
	isEditMode: false,
	isEditCanceled: false,
	isEditDrawerOpen: false,
	isDarkMode: false,
	isAuthModalOpen: false,
	isEditPageDrawerOpen: false,
};

const layoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		setTermsModalIsOpen(state, action) {
			state.termsModalIsOpen = action.payload;
		},

		toggleTermsModalIsOpen(state) {
			state.termsModalIsOpen = !state.termsModalIsOpen;
		},

		toggleDarkMode(state) {
			state.isDarkMode = !state.isDarkMode;
		},
		toggleIsAuthModalOpen(state) {
			state.isAuthModalOpen = !state.isAuthModalOpen;
		},

		toggleEditMode(state) {
			state.isEditMode = !state.isEditMode;
		},

		setIsEditCanceled(state, action) {
			state.isEditCanceled = action.payload;
		},

		toggleIsEditDrawerOpen(state) {
			state.isEditDrawerOpen = !state.isEditDrawerOpen;
		},

		setIsEditPageDrawerOpen(state, action) {
			state.isEditPageDrawerOpen = action.payload;
		},

		toggleIsEditPageDrawerOpen(state) {
			state.isEditPageDrawerOpen = !state.isEditPageDrawerOpen;
		},
	},
});

export const {
	toggleEditMode,
	setIsEditCanceled,
	toggleIsEditDrawerOpen,
	setTermsModalIsOpen,
	toggleTermsModalIsOpen,
	toggleDarkMode,
	toggleIsAuthModalOpen,
	setIsEditPageDrawerOpen,
	toggleIsEditPageDrawerOpen,
} = layoutSlice.actions;

export default layoutSlice;
