import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './components/Item';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      items: [],
    });
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});