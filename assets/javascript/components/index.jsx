import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './../reducers/reducers.js';
import SimpleComponent from './component.jsx';
require('./../../css/style.css');

const store = createStore(
	allReducers,
	applyMiddleware(thunk, promise, createLogger)
);

class App extends React.Component {
    render () {
        return (
            <div>
            <h2>Hello, Mayur Mate !</h2>
            <SimpleComponent />
        </div>
    );
    }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));