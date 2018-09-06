import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import StoreFactory from './store/StoreFactory.js';

const store = StoreFactory()
console.log(store);
window.React = React
window.store = store

render(
	<Provider store = {store}>
	    <App/>
    </Provider>,
	document.getElementById('root')
)