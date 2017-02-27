import React from 'react';
import chai, { expect} from 'chai';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import chaiEnzyme from 'chai-enzyme';
import MockAdapter from 'axios-mock-adapter';
import { spy } from 'sinon';

import AppContainer, { App }  from './App';

chai.use(chaiEnzyme());

it('render without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).to.be.exits;
});
