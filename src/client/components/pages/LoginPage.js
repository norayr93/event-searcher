import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = require('../../../../public/images/event.png');

const config = {
  logo,
  authUrl: ''
};

const LoginPage = () => (
  <div className="container">
    <div className="container__left">
      <header className="login-header">
        <div className="login-header__wrapper">
          <p className="login-header__logo-box">
            <NavLink to="/" role="link"><img src={config.logo} alt="logo" width="190" height="80" className="navbar__logo" /></NavLink>
          </p>
        </div>
      </header>
      <main>
        <section className="register">
          <div className="register-wrapper">
            <section className="register__description">
              <header className="register__header">
                <h2>Events</h2>
                <p>Here you can search your favourite events and get the location on map</p>
              </header>
              <p className="register__info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book.It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </section>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <p className="copyright">
&copy; Events 2018:
          {' '}
          <small>All rights reserved</small>
        </p>
        <p>
Created by
          {' '}
          <a className="author" href="https://www.linkedin.com/in/norayr-ghukasyan-44641a161/">Norayr Ghukasyan</a>
        </p>
      </footer>
    </div>
    <div className="container__right">
      <section className="login">
        <p className="login__text">Sign in with Eventbrite</p>
        <p className="login__button-box">
          <a href="/auth/eventbrite" className="btn btn--login login__button">Sign in</a>
        </p>
      </section>
    </div>
  </div>
);

export default LoginPage;

// <NavLink to="/auth/eventbrite" className="btn btn_sign-in" role="link">Sign in</NavLink>
// <a href="/auth/eventbrite" className="btn btn_sign-in">Sign in</a>
