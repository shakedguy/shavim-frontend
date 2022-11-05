import axios from 'axios';

const URL_BASE = String(process.env.REACT_APP_API_DOMAIN);

const DEFAULT_HEADERS = {
	'Content-Type': String(process.env.REACT_APP_BASE_API_HEADERS_CONTENT_TYPE),
	Accept: String(process.env.REACT_APP_BASE_API_HEADERS_ACCEPT),
};

const httpClient = axios.create({
	baseURL: URL_BASE,
	headers: DEFAULT_HEADERS,
});

export { URL_BASE, DEFAULT_HEADERS, httpClient };
export default httpClient;
