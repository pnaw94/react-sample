import React from 'react';

const ArticleImage = ({ url, ...props }) => {
    return <img src={url} {...props} alt={props.alt || 'Image...'} />;
}

export default ArticleImage;
