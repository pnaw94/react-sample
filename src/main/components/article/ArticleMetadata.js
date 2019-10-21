import React from 'react';
import { dateFormatter } from './utils/Utils';

const ArticleMetadata = ({ status, type, createdAt, updatedAt }) => {
    return (
        <div className="Article-meta">
            <div><strong>Type: </strong>{type}</div>
            <div><strong>Status: </strong>{status}</div>
            <div>
                <strong>Created at: </strong>
                <p>{dateFormatter(createdAt)}</p>
            </div>
            <div>
                <strong>Last modified: </strong>
                <p>{dateFormatter(updatedAt)}</p>
            </div>
        </div>
    );
}

export default ArticleMetadata;