import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Home = lazy(() => import('./home/Home'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/home" component={ Home } />

          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;