import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import MainContainer from './containers/MainContainer';

import configureStore from './ConfigureStore';

const store = configureStore();

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={MainContainer}/>
    </Router>
);

const provider = (
    <Provider store={store}>
        {router}
    </Provider>
);

ReactDOM.render(provider, document.getElementById('application-mount'));
