import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ServicePage from './components/service/ServicePage';
import ListPage from './components/list/ListPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ServicePage} />
		<Route path="list" component={ListPage} />
	</Route>
);