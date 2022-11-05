import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setLight, setDark, setCurrent } from '../features/theme/themeSlice';
import httpClient from '../utils/httpClient';
import Theme from '../utils/theme';

const fetchTheme = (name) => httpClient.get(`/api/themes/${name}/`);

const useTheme = (name = 'default') => {
	const dispatch = useDispatch();

	const {
		isLoading: defaultThemeLoading,
		isError: defaultIsThemeError,
		error: defaultThemeError,
		refetch: refetchDefaultTheme,
	} = useQuery(['fetch_default_theme'], () => fetchTheme(name), {
		enabled: !!name,
		onSuccess: (response) => {
			dispatch(setLight(Theme.fromApi(response.data).toObject()));
			dispatch(setCurrent(Theme.fromApi(response.data).toObject()));
		},
	});
	const {
		isLoading: darkThemeLoading,
		isError: darkThemeIsError,
		error: darkThemeError,
		refetch: refetchDarkTheme,
	} = useQuery(['fetch_dark_theme'], () => fetchTheme(`${name}_dark`), {
		enabled: !!name,
		onSuccess: (response) => {
			dispatch(setDark(Theme.fromApi(response.data).toObject()));
		},
	});

	const refetch = () => {
		refetchDefaultTheme();
		refetchDarkTheme();
	};

	return {
		isLoading: defaultThemeLoading || darkThemeLoading,
		isError: defaultIsThemeError || darkThemeIsError,
		error: defaultThemeError || darkThemeError,
		refetch,
	};
};

export default useTheme;
