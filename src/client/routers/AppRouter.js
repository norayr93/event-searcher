import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/pages/DashboardPage';
import LoginPage from '../components/pages/LoginPage';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
