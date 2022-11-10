import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	termsModalIsOpen: false,
	isEditMode: false,
	isEditCanceled: false,
	isEditDrawerOpen: false,
	isDarkMode: false,
	isAuthModalOpen: false,
	isEditPageDrawerOpen: false,
	openDialog: null,
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

		setOpenDialog(state, action) {
			state.openDialog = action.payload;
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
	setOpenDialog,
} = layoutSlice.actions;

export default layoutSlice;
