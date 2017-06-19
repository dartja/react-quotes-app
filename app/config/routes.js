import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main.js";
import Form from "../components/Form";
import Favorites from "../components/Favorites";

// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    	<Route path="favorites" component={Favorites} />
    </Route>
  </Router>
);

export default routes;
