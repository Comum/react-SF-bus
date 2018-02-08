import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './scss/_import.scss';

import Header from './components/header.js';
import Content from './container/content.js';

const render = () => {
    ReactDOM.render((
        <div className="app">
            <Header />
            <Content />
        </div>
    ), document.getElementById('root'));
}
render();