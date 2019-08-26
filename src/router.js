import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Main from './conteiners/Main';
import PictureInfo from './components/pictureInfo';
import Favorites from './conteiners/Favorites';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route exact path="/favorites" component={Favorites} />
		<Route path="/item/:id" component={PictureInfo} />
	</Switch>
);

export default hot(module)(Router);
