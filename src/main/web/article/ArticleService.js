import axios from 'axios';

import { getApiUrl } from '../common/WebUtils';
import { articlePath } from './article.properties';

class ArticleFetchResult {
    result; data;

    constructor({ result, data }) {
        this.result = result;
        this.data = data;
    }
}

const fetchArticle = (id) => {
    return axios.get(getApiUrl(articlePath + '/' + id))
        .then(response => ({ result: 'success', data: response.data }))
        .catch(error => {
            const response = error.response || {};   
            return { result: response.status === 404 ? 'not-found' : 'unexpected', data: response.data || {}}
        })
        .then(data => new ArticleFetchResult(data));
}

export { fetchArticle };
