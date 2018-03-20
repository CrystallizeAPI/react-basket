import { shallow } from 'enzyme';
import React from 'react';

import Header from 'components/header';

describe('Header', () => {
  it(`Has 2 buttons`, () => {
    const header = shallow(<Header />);

    expect(header.find('button').length).toEqual(2);
  });
});
