import React from 'react';

import './Application.css';

import { withBackoffRetry } from './web/common/WebUtils'
import { fetchArticle } from './web/article/ArticleService';
import Article from './components/article/Article';
import SpinnerLoader from './components/common/SpinnerLoader';
import ErrorMessage from './components/common/ErrorMessage';

class Application extends React.Component {
    state = { loading: true, result: null, data: {} };

    articleId = 'fa9519d5-0363-4b8d-8e1f-627d802c08a8';
    onArticleLoaded = this.props.onArticleLoaded || (() => {});

    componentDidMount() {
        withBackoffRetry(5)(() => fetchArticle(this.articleId))
            .then(article => this.setState({
                loading: false,
                result: article.result,
                data: article.data
            }))
            .catch(error => this.setState({
                loading: false,
                result: error.result
            }))
            .then(this.onArticleLoaded);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Displaying article: {this.articleId}
                </header>
                <main className="App-body">
                    {this.state.loading ? <SpinnerLoader text="Loading article..." /> : this.renderResult()}
                </main>
            </div>
        );
    }

    renderResult() {
        const { result, data } = this.state;
        if (result === 'success') return <Article article={data} />;
        if (result === 'not-found') return <ErrorMessage text="Article not found..." />;
        return <ErrorMessage text="Unexpected error..." />;
    }
}

export default Application;
