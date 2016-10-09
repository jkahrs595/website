import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './projects/Projects';
import { Provider } from 'react-redux';
import {syncHistoryWithStore}from 'react-router-redux';
import { browserHistory, Router, Route } from 'react-router';
import configureStore from './stores/ConfigureStore';
import './index.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const router = (
    <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/projects" component={Projects}/>
    </Router>
);

const provider = (
    <Provider store={store}>
        {router}
    </Provider>
);

ReactDOM.render(
  provider,
  document.getElementById('root')
);
