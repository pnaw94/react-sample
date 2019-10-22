import retry from 'async-retry';

import { apiUrl, serviceUrl } from '../web.properties';

const getServiceUrl = (path) => serviceUrl + (path.startsWith('/') ? path : '/' + path);
const getApiUrl = (path) => apiUrl + (path.startsWith('/') ? path : '/' + path);

const withBackoffRetry = (amount, firstWait, maxWait) => {
    const actualFirstWait = firstWait || 10;
    const actualMaxWait = maxWait || actualFirstWait * 10;

    return (action) => {
        return retry(async (bail, attempt) => {
            const response = await action();
            if (response.result === 'success') return response;

            // Do not retry on 404 or when max attempts reached
            if (attempt === amount || response.result === 'not-found') {
                bail(response);
                return;
            }

            throw new Error(response.result);
        }, {
            retries: amount,
            minTimeout: actualFirstWait,
            maxTimeout: actualMaxWait,
            onRetry: () => {}
        })
    }
}

export { getApiUrl, getServiceUrl, withBackoffRetry };
