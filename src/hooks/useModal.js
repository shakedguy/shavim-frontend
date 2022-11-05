import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import httpClient from '../utils/httpClient';

const fetchPages = (slug) => httpClient.get(`/api/items/modals/${slug}`);

const usePages = (name) => {
	const [slug, setSlug] = useState(name);
	const [modal, setModal] = useState(null);

	const { isLoading, isError, error, refetch } = useQuery(
		['fetch_modal', slug],
		() => fetchPages(slug),
		{
			enabled: !!slug,
			onSuccess: (response) => {
				setModal(response.data);
			},
		}
	);

	return { modal, isLoading, isError, error, setSlug, refetch };
};

export default usePages;
