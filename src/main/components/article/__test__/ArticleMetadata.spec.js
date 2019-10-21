import React from 'react';
import { shallow } from 'enzyme';
import ArticleMetadata from '../ArticleMetadata';

describe('ArticleMetadata', () => {
    it('renders text with article type, created date, updated date, and status', () => {
        // given
        const status = 'status';
        const type = 'type';
        const createdAt = new Date(Date.now() - 1000);
        const updatedAt = new Date();

        // when
        const wrapper = shallow(<ArticleMetadata status={status} type={type} createdAt={createdAt} updatedAt={updatedAt} />);

        // then
        expect(wrapper.is('div')).toEqual(true);

        const childDivs = wrapper.children().find('div');
        expect(childDivs.at(0).text()).toEqual('Type: ' + type);
        expect(childDivs.at(1).text()).toEqual('Created at: ' + createdAt.toLocaleString());
        expect(childDivs.at(2).text()).toEqual('Last modified: ' + updatedAt.toLocaleString());
        expect(childDivs.at(3).text()).toEqual('Status: ' + status);
    });
});
