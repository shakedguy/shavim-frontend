import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { setDrawer } from '../features/drawer/drawerSlice';
import httpClient from '../utils/httpClient';
import Drawer from '../items/drawer';

const fetchDrawer = (slug) => httpClient.get(`/api/drawers/${slug}/`);

const useDrawer = (drawerSlug) => {
	const [slug, setSlug] = useState(drawerSlug);
	const drawer = useSelector((state) => state.drawer);
	const dispatch = useDispatch();
	const {
		isLoading: drawerIsLoading,
		isError: drawerIsError,
		error: drawerError,
		refetch: refetchDrawer,
	} = useQuery(['fetch_drawer_bar'], () => fetchDrawer(slug), {
		enabled: !!slug,
		onSuccess: (response) => {
			dispatch(setDrawer(Drawer.fromApi(response.data).toObject()));
		},
	});
	return {
		drawer,
		drawerIsLoading,
		drawerIsError,
		drawerError,
		setSlug,
		refetchDrawer,
	};
};

export default useDrawer;
