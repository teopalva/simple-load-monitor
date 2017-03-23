import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { reducer } from './reducer';
import App from './components/App';
import initSocket from './initSocket';

const el = document.createElement('div');
el.id = 'react-root';
document.body.appendChild(el);

const store = createStore(reducer);
const Container = connect(s => ({ model: s }))(App);

// Render react app
ReactDOM.render(<Container store={store} />, el);

// Init socket connection to redux store
initSocket(store.dispatch);
