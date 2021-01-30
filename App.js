import React from 'react';
import {
  View,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducers/index';
import rootSaga from './sagas/index';
import Home from './Screens/Home';

const App= (props) =>{

  const sagaMiddleware=createSagaMiddleware();

  const store=createStore(Reducer,applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
        <Home/>
    </Provider>
    )
}
export default App;
