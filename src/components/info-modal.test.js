import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });


    it('Should call onClose when close button clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback} />);
        const link = wrapper.find('.close');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });


});
