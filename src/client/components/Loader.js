import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = ({ loggedIn }) => (!loggedIn ? (
  <div className="loader">
    <Loader
      className="loader"
      type="Bars"
      color="#00Baaa"
      height="100"
      width="100"
    />
  </div>
) : '');

export default LoaderSpinner;
