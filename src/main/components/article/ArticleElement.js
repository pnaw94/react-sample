import React from 'react';
import htmlParser from 'html-react-parser';

const renderSimpleText = (values, className) => {
    return (
        <div className={className}>
            {values.map(val => <p>{val}</p>)}
        </div>
    );
}

const renderFormattedText = (values, className) => {
    return (
        <div className={className}>
            {values.map(val => htmlParser(val))}
        </div>
    );
}

const renderersMap = {
    text: renderSimpleText,
    formattedtext: renderFormattedText,
    datetime: () => <div />,
    group: () => <div />
};

const ArticleElement = ({ element, className }) => {
    const renderer = renderersMap[element.elementType]; // TODO: Unknown types?
    const actualValue = element.values || [element.value];
    return renderer(actualValue, className);
};

export default ArticleElement;
