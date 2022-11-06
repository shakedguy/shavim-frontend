import React from 'react';
import { Routes, Route } from 'react-router-dom';
import usePages from './hooks/usePages';
import Spinner from './components/spinner/Spinner';
import Error from './components/errors/Error';
import App from './App';

const urls = [
	'/about',
	'/info/calculator',
	'/info/child-support',
	'/info/consult',
	'/404',
	'/info/financial-help',
	'/home',
	'/info',
	'/info/insurance',
	'/registration',
	'/info/tools',
];

const Router = () => {
	const { slugs, isLoading, isError, error } = usePages();

	if (isLoading) return <Spinner />;

	if (isError) return <Error data={error} />;

	console.log(slugs);

	return (
		<Routes>
			<Route
				path='/'
				element={<App />}
			/>
			{/* <Route
				path='/:pageName'
				element={<App />}
			/>
			<Route
				path='/:pageName/:slug'
				element={<App />}
			/> */}
			{slugs.map((slug, index) => (
				<Route
					key={index}
					path={`${slug}`}
					element={<App />}
				/>
			))}
			{urls.map((url, index) => (
				<Route
					key={index}
					path={`${url}`}
					element={<App />}
				/>
			))}
			<Route
				path='/shavim-frontend'
				element={<App />}
			/>
			{slugs.map((slug, index) => (
				<Route
					key={index}
					path={`/shavim-frontend${slug}`}
					element={<App />}
				/>
			))}

			<Route
				path='/shavim-frontend/:slug/'
				element={<App />}
			/>
		</Routes>
	);
};

export default Router;
