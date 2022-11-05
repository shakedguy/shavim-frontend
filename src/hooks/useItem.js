import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import httpClient from '../utils/httpClient';
import Page from '../items/page';

const fetchItem = (type, slug) => httpClient.get(`/api/items/${type}/${slug}/`);

const usePages = (type, pageSlug) => {
	const dispatch = useDispatch();

	const [item, setItem] = useState(null);
	const [type, setType] = useState(type);
	const [slug, setSlug] = useState(pageSlug);
	const {
		isLoading: isLoadingItem,
		isError: isErrorItem,
		error: errorItem,
		refetch: refetchItem,
	} = useQuery(['fetch_pages', slug], () => fetchItem(slug), {
		enabled: false,
		onSuccess: (response) => {
			setItem(response.data);
		},
	});

	return {
		item,
		isLoadingItem,
		isErrorItem,
		errorItem,
		setType,
		setSlug,
		refetchPage,
	};
};

export default usePages;
