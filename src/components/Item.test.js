import renderer from 'react-test-renderer';
import React from 'react';
import Item from './Item';

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
    <Item name="test"/>
  );
  expect(tree).toMatchSnapshot();
});
