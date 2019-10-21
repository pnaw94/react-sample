import React from 'react';
import { shallow } from 'enzyme';

import Application from '../Application';

jest.mock('../web/article/ArticleService')
import { fetchArticle as fetchArticleMock } from '../web/article/ArticleService';

describe('Application', () => {
    const mountWithFetchAwait = async (props) => {
        let articleFetchNotifier;
        const articleFetchWaiter = new Promise(resolve => articleFetchNotifier = resolve);

        const wrapper = shallow(<Application {...(props || {})} onArticleLoaded={articleFetchNotifier} />);
        await articleFetchWaiter;
        wrapper.update();

        return wrapper;
    }

    it('renders loading spinner in main section when article is being loaded', () => {
        // given
        fetchArticleMock.mockReturnValue(new Promise(resolve => {}));

        // when
        const wrapper = shallow(<Application />);

        // then
        const mainBody = wrapper.find('main');
        expect(mainBody.children().length).toEqual(1);

        const spinner = mainBody.find('SpinnerLoader');
        expect(spinner.exists()).toEqual(true);
    });

    it('renders error message in main section when article loading results in not-found error', async () => {
        // given
        fetchArticleMock.mockReturnValue(Promise.resolve({ result: 'not-found', data: {} }));

        // when
        const wrapper = await mountWithFetchAwait();

        // then
        const mainBody = wrapper.find('main');
        expect(mainBody.children().length).toEqual(1);

        const errorMessage = mainBody.find('ErrorMessage');
        expect(errorMessage.exists()).toEqual(true);
    });

    it('renders article main section when article loading results in success', async () => {
        // given
        const expectedData = { name: 'article' };
        fetchArticleMock.mockReturnValue(Promise.resolve({ result: 'success', data: expectedData }));

        // when
        const wrapper = await mountWithFetchAwait();

        // then
        const mainBody = wrapper.find('main');
        expect(mainBody.children().length).toEqual(1);

        const article = mainBody.find('Article');
        expect(article.exists()).toEqual(true);
        expect(article.prop('article')).toEqual(expectedData);
    });
});
