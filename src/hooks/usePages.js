import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	setCurrentPage,
	setAllPages,
	setSlugs,
} from '../features/pages/pagesSlice';
import httpClient from '../utils/httpClient';

const fetchAllPages = () => httpClient.get(`/api/pages/`);

const fetchPathes = () => httpClient.get(`/api/pages/pathes/`);

const fetchPage = (slug) => {
	slug = slug.replace('shavim-frontend/', '');
	slug = String(slug).endsWith('/') ? slug : `${slug}/`;
	console.log('slug', slug);
	return httpClient.get(`/api/pages${slug}`);
};

const usePages = () => {
	const { pathname } = useLocation();

	const params = useParams();
	const { pageName, slug: slugParam } = params;
	const dispatch = useDispatch();
	const {
		all: pages,
		slugs,
		currentPage,
	} = useSelector((state) => state.pages);

	const {
		data: allPages,
		isLoading: allPagesIsLoading,
		isError: allPagesIsError,
		error: allPagesError,
	} = useQuery(['fetch_pages_slugs'], fetchPathes, {
		onSuccess: (response) => {
			dispatch(setSlugs(response.data));
		},
	});

	const {
		isLoading: pageLoading,
		isError: pageIsError,
		error: pageError,
		refetch: pageRefetch,
	} = useQuery(
		['fetch_pages', pathname],
		() =>
			fetchPage(
				pathname === '/shavim-frontend/' ? '/shavim-frontend/home/' : pathname
			),
		{
			enabled: false,
			onSuccess: (response) => {
				dispatch(setCurrentPage(response.data));
			},
		}
	);

	useEffect(() => {
		pageRefetch();
	}, [pathname]);

	const isLoading = allPagesIsLoading || pageLoading;
	const isError = allPagesIsError || pageIsError;
	const error = allPagesError || pageError;

	return { pages, slugs, currentPage, isLoading, isError, error, pageRefetch };
};

export default usePages;
