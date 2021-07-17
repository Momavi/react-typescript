import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
				store={store} />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root')
);
