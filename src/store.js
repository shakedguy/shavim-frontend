import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import layoutSlice from './features/layout/layoutSlice';
import pagesSlice from './features/pages/pagesSlice';
import themeSlice from './features/theme/themeSlice';
import authSlice from './features/auth/authSlice';
import drawerSlice from './features/drawer/drawerSlice';
import appBarSlice from './features/app_bar/appBarSlice';

const logger = createLogger({
	collapsed: true,
});

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		layout: layoutSlice.reducer,
		pages: pagesSlice.reducer,
		theme: themeSlice.reducer,
		auth: authSlice.reducer,
		drawer: drawerSlice.reducer,
		appBar: appBarSlice.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middlewares),
});

export default store;
// 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

//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
