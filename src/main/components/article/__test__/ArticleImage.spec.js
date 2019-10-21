import React from 'react';
import { shallow } from 'enzyme';

import ArticleImage from '../ArticleImage';

describe('ArticleImage', () => {
    it('renders image with given source', () => {
        // given
        const url = 'sample-url';

        // when
        const wrapper = shallow(<ArticleImage url={url} />);

        // then
        expect(wrapper.is('img')).toEqual(true);
        expect(wrapper.prop('src')).toEqual(url);
    });
    
    it('passes all given properties to image', () => {
        // given
        const props = {
            className: 'sample-class',
            width: 500,
            height: 20
        };

        // when
        const wrapper = shallow(<ArticleImage {...props} />);

        // then
        expect(wrapper.is('img')).toEqual(true);
        Object.entries(props, (key, val) => expect(wraper.prop(key).toEqual(val)));
    });
});
