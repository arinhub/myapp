import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

  
  // VARS
  // TODO: GET process.env FOR REACT NATIVE AND SHOW THIS DEVTOOLS ONLY ON DEV ENV
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
     applyMiddleware(thunkHandler())
    )
   );

function thunkHandler() {
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

export default store;