import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.container';
import { rootReducer, rootEpic } from './redux/modules';


let observableMiddleware = createEpicMiddleware();
let store = createStore(rootReducer, applyMiddleware(observableMiddleware));
observableMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
