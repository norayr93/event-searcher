import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import EventReducer from '../reducers/EventReducer';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    EventReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  return store;
};
