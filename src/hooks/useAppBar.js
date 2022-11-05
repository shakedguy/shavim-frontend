import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { setAppBar } from '../features/app_bar/appBarSlice';
import httpClient from '../utils/httpClient';
import AppBar from '../items/appBar';

const fetchAppBar = (slug) => httpClient.get(`/api/appbars/${slug}/`);

const useAppBar = (appBarSlug) => {
	const [slug, setSlug] = useState(appBarSlug);
	const appBar = useSelector((state) => state.appBar);
	const dispatch = useDispatch();
	const {
		isLoading: appBarIsLoading,
		isError: appBarIsError,
		error: appBarError,
		refetch: refetchAppBar,
	} = useQuery(['fetch_app_bar'], () => fetchAppBar(slug), {
		enabled: !!slug,
		onSuccess: (response) => {
			dispatch(setAppBar(response.data));
		},
	});
	return {
		appBar,
		appBarIsLoading,
		appBarIsError,
		appBarError,
		setSlug,
		refetchAppBar,
	};
};

export default useAppBar;
