import axios from 'axios';

// const URL_BASE = 'http://localhost:8000';
// const URL_BASE = 'https://shavim-admin-8mb4g.ondigitalocean.app';
const URL_BASE = String(process.env.REACT_APP_API_DOMAIN);

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
};

const httpClient = axios.create({
	baseURL: URL_BASE,
	headers: DEFAULT_HEADERS,
});

export { URL_BASE, DEFAULT_HEADERS, httpClient };
export default httpClient;
