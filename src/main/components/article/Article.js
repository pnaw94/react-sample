import React from 'react';

import './Article.css';

import { getServiceUrl } from '../../web/common/WebUtils';

import ArticleElement from './ArticleElement';
import ArticleImage from './ArticleImage';
import ArticleMetadata from './ArticleMetadata';

class Article extends React.Component {
    // TODO: Validate input
    props = {
        article: {},
    };

    render() {
        const { article } = this.props;
        const thumbnailUrl = getServiceUrl(article.thumbnail.url);
        return (
            <div className="Article">
                <div className="Article-heading">
                    <ArticleElement element={article.elements.heading} />
                    <div className="Article-author">
                        <ArticleElement element={article.elements.author} />
                        <ArticleElement element={article.elements.date} />
                    </div>
                </div>
                <div className="Article-body">
                    <div>
                        <ArticleImage url={this.getMainImageSource()} className="Article-main-image" />
                        <ArticleMetadata type={article.type} createdAt={article.created} updatedAt={article.lastModified} status={article.status} />
                    </div>
                    <ArticleElement element={article.elements.body} className="Article-body-content" />
                </div>
            </div>
        );
    }

    getMainImageSource() {
        // TODO: Secure url
        return getServiceUrl(this.props.article.elements.mainImage.value.leadImage.url);
    }
}

export default Article;
