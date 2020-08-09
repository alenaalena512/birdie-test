import * as React from 'react';
import InfoTable from './InfoTable';
import { shallow } from 'enzyme';

describe('InfoTable component', () => {
    it('asks to select a care receiver', () => {
        const props: any[] = [];
        const wrapper = shallow(<InfoTable events={props} />);
        expect(wrapper.find('p').text()).toEqual('Please select a care receiver');
    });

    it('displays a timestamp as a header', () => {
        const props: any[] = [{
            id: '234',
            timestamp: '2019-04-26T07:08:21.758Z'
        }];
        const wrapper = shallow(<InfoTable events={props} />);
        expect(wrapper.find('CollapsePanel').get(0).props.header).toBe('Apr 26, 2019, 8:08 AM');
    });
});