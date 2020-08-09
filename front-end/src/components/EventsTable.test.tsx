import * as React from 'react';
import EventsTable from './EventsTable';
import { shallow } from 'enzyme';

describe('EventsTable component mood event', () => {
    it('displays the mood description', () => {
        const events = [{
            event_type: 'mood_observation',
            mood: 'Okay',
            id: 'fhgisjb'
        }];

        const wrapper = shallow(<EventsTable events={events} />);
        expect(wrapper.find('p').text()).toEqual('Mood observation: Okay');
    });
});

describe('EventsTable component default event', () => {
    it('displays default message', () => {
        const events = [{
            event_type: 'test',
            id: 'fhgisjb'
        }];

        const wrapper = shallow(<EventsTable events={events} />);
        expect(wrapper.find('p').text()).toEqual('test');
    });
});