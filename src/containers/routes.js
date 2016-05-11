/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import Container from "./Container";
import Homepage from 'components/pages/Homepage/Homepage';
import Willchill from 'components/pages/Willchill/Willchill';

module.exports = (
	<Router>
		<Route path="/" component={Container}>
			<IndexRoute component={Homepage} />
		</Route>

		<Route path="/willchill" component={Container}>
			<IndexRoute component={Willchill} />
		</Route>
	</Router>
);
