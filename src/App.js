import Page from './features/pages/Page';
import Layout from './features/layout/Layout';
import { FirebaseProvider } from './context/firebaseContext';
import ThemeProvider from './context/themeContext';

import './App.css';

const App = () => {
	return (
		<ThemeProvider>
			<FirebaseProvider>
				<Layout>
					<Page />
				</Layout>
			</FirebaseProvider>
		</ThemeProvider>
	);
};

export default App;
