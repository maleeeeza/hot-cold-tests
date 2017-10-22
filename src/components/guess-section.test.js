import React from 'react';
import {shallow, mount, render} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Should render feedback', () => {
        const feedback = "Weee you are right!";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});
