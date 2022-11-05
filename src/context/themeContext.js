import { createContext } from 'react';
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import RTL, { cacheRtl } from '../utils/rtlCache';

const theme = createTheme({
	direction: 'rtl',
});

const themeContext = createContext({
	theme,
	cacheRtl,
});

const ThemeProvider = ({ children }) => {
	return (
		<themeContext.Provider value={{ theme, cacheRtl }}>
			<RTL>
				<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
			</RTL>
		</themeContext.Provider>
	);
};

export default ThemeProvider;
