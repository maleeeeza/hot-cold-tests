import React from 'react';
import {shallow, mount, render} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should call onGuess when submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = 28;
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());

    });

    it('Should reset form when submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="text"]');
        input.instance().value = 18;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});
