import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const logo = require('../../../../public/images/react.png');

const config = {
  logo,
  authUrl: ''
};

class LoginPage extends Component {
  // componentDidMount() {
  //   fetch('/api/current_user', {
  //     credentials: 'include',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json ' }
  //   }).then(res => res.json())
  //     .then((res) => {
  //       console.log(res, 'reeees');
  //     });
  // }

  render() {
    return (
      <React.Fragment>
        <header className="login-header">
          <div className="row">
            <div className="login-header__wrapper">
              <div className="login-header__logo-box">
                <NavLink to="/" role="link"><img src={config.logo} alt="logo" width="190" height="80" className="navbar__logo" /></NavLink>
              </div>
              <h1 className="login-header__heading">Welcome to Events</h1>
            </div>
          </div>
        </header>
        <main>
          <section className="register">
            <div className="row">
              <div className="register-wrapper">
                <section className="register__description">
                  <h2>Events</h2>
                  <p>Here you can search your favourite events and get the location on map</p>
                </section>
                <section className="register__sign-in">
                  <h2>Sign in with facebook</h2>
                  <div>
                    <a href="/auth/eventbrite" className="btn btn_sign-in">Sign in</a>
                  </div>
                </section>
              </div>
            </div>
          </section>

        </main>
        <footer className="main-footer">
          <div className="row">
            <p className="copyright">
&copy; Events 2018:
              {' '}
              <small>All rights reserved</small>
            </p>
            <p>
Created by
              {' '}
              <a className="btn" href="https://www.linkedin.com/in/norayr-ghukasyan-44641a161/">Norayr Ghukasyan</a>
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default LoginPage;

// <NavLink to="/auth/eventbrite" className="btn btn_sign-in" role="link">Sign in</NavLink>
// <a href="/auth/eventbrite" className="btn btn_sign-in">Sign in</a>
