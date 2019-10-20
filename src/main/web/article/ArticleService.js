import axios from 'axios';

const fetchArticle = (url) => {
    // TODO: Error handling
    return axios.get(url).then(resp => {
        return resp.data;
    });
}

export { fetchArticle };
