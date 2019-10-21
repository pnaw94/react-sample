import mockAxios from 'jest-mock-axios';
import { fetchArticle } from '../ArticleService';

describe('ArticleService', () => {
    const defaultArticleId = 'article-id';

    afterEach(() => mockAxios.reset());

    it('should return success result when response is successful', async () => {
        // given
        const expectedResponse = { data: 'article-data' };

        // when
        const resultPromise = fetchArticle(defaultArticleId);
        mockAxios.mockResponse(expectedResponse);
        const result = await resultPromise;


        // then
        expect(result.result).toEqual('success');
        expect(result.data).toEqual(expectedResponse.data);
    });
    afterEach(() => mockAxios.reset());

    it('should return not-found result when response code is 404', async () => {
        // given
        const expectedError = { response: { status: 404, data: 'article-data' } };

        // when
        const resultPromise = fetchArticle(defaultArticleId);
        mockAxios.mockError(expectedError);
        const result = await resultPromise;


        // then
        expect(result.result).toEqual('not-found');
        expect(result.data).toEqual(expectedError.response.data);
    });
    afterEach(() => mockAxios.reset());

    it('should return unexpected-data result when response code is not successful and not 404', async () => {
        // given
        const expectedError = { response: { status: 500, data: 'article-data' } };

        // when
        const resultPromise = fetchArticle(defaultArticleId);
        mockAxios.mockError(expectedError);
        const result = await resultPromise;


        // then
        expect(result.result).toEqual('unexpected');
        expect(result.data).toEqual(expectedError.response.data);
    });
});
