import React from 'react';

const dateFormatter = (date) => {
    return date ? new Date(Date.parse(date)).toLocaleString() : "";
}

const ArticleMetadata = ({ status, type, createdAt, updatedAt }) => {
    return (
        <div className="grid-container">
            <div><strong>Type:</strong> {type}</div>
            <div><strong>Created at:</strong> {dateFormatter(createdAt)}</div>
            <div><strong>Last modified:</strong> {dateFormatter(updatedAt)}</div>
            <div><strong>Status:</strong> {status}</div>
        </div>
    );
}

export default ArticleMetadata;