import React from 'react';

const ArticleImage = ({ url, ...props }) => {
    return <img src={url} {...props} />;
}

export default ArticleImage;
