import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router';

import { store } from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename="/react-insta">
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
