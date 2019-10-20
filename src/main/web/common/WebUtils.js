import { apiUrl, serviceUrl } from '../web.properties';

const getServiceUrl = (path) => serviceUrl + (path.startsWith('/') ? path : '/' + path);
const getApiUrl = (path) => apiUrl + (path.startsWith('/') ? path : '/' + path);

export { getApiUrl, getServiceUrl };
