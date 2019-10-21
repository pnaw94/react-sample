import React from 'react';

import './Article.css';

import { getServiceUrl } from '../../web/common/WebUtils';

import ArticleElement from './ArticleElement';
import ArticleImage from './ArticleImage';
import ArticleMetadata from './ArticleMetadata';
import { dateFormatter } from './utils/Utils';

class Article extends React.Component {
    render() {
        return (
            <div className="Article">
                {this.renderHeading()}
                {this.renderBody()}
            </div>
        );
    }
    
    renderHeading() {
        const { article } = this.props;
        return (
            <div className="Article-heading">
                <ArticleElement element={article.elements.heading} className="Article-title" />
                <div className="Article-author">
                    <ArticleElement element={article.elements.author} inline /> on {dateFormatter(article.created)}
                </div>
            </div>
        );
    }

    renderBody() {
        const { article } = this.props;
        const mainImageUrl = getServiceUrl(article.elements.mainImage.value.leadImage.url); // Potentially risky
        return (
            <div className="Article-body">
                <div>
                    <ArticleImage url={mainImageUrl} className="Article-main-image" />
                    <ArticleMetadata type={article.type} createdAt={article.created} updatedAt={article.lastModified} status={article.status} />
                </div>
                <ArticleElement element={article.elements.body} className="Article-body-content" />
            </div>
        );
    }
}

export default Article;
