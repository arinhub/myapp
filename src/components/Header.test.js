import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header';

const mockDispatchFunction = jest.fn();

jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation(selector => selector()),
    useDispatch: () => {
      return mockDispatchFunction;
    },
  };
});

it('renders correctly', () => {
  const tree = renderer.create(
    <Header />
  );
  expect(tree).toMatchSnapshot();
});
