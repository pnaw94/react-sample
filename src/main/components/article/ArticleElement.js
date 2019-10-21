import React from 'react';
import htmlParser from 'html-react-parser';

const renderSimpleText = (values, className, inline) => {
    const Wrapper = inline ? 'span' : 'div';
    const ValueWrapper = inline ? 'span' : 'p';
    return (
        <Wrapper className={className}>
            {values.map(val => <ValueWrapper>{val}</ValueWrapper>)}
        </Wrapper>
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
    formattedtext: renderFormattedText
};

const ArticleElement = ({ element, className, inline }) => {
    const renderer = renderersMap[element.elementType] || renderersMap.text;
    const actualValue = element.values || [element.value];
    return renderer(actualValue, className, inline);
};

export default ArticleElement;
