import React from 'react';
import {shallow, render} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Should start a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Spiffy YAY',
            correctAnswer: 8
        });

        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Should be able to make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().guess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([25, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(80);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(95);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});
