import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from 'react-router';
import { useSessionContext } from './session-context';
import Toolbar from './Toolbar';

export default function AppRouter() {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const defaultRouteProps = {
    isAuthenticated: sessionContext.isAuthenticated,
  };

  return (<Router>
    <div>
      <Switch>
        <Route path="/page1" key="login" component={(routeprops) => {
          return <Toolbar {...routeprops} title="page1" url="/page2" />
        }} {...defaultRouteProps} />
        <Route path="/page2" key="login" component={(routeprops) => {
          return <Toolbar {...routeprops} title="page2" url="/page1" />
        }} {...defaultRouteProps} />
      </Switch>
    </div>
  </Router>)
}