import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardPage from '../components/pages/DashboardPage';
import LoginPage from '../components/pages/LoginPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import { getUserInfo } from '../actions';

class AppRouter extends Component {
  componentDidMount() {
    const { dispatchUserInfo } = this.props;
    dispatchUserInfo();
  }

  render() {
    return (
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
  }
}

AppRouter.defaultProps = {
  dispatchUserInfo: null
};

AppRouter.propTypes = {
  dispatchUserInfo: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  dispatchUserInfo() {
    dispatch(getUserInfo());
  }
});

export default connect(null, mapDispatchToProps)(AppRouter);
