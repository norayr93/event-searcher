import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchIcon from '../SvgIcons';
import MapComponent from '../Map';
import { getEventInfo, getUserInfo } from '../../actions';

/* eslint react/prop-types: 0 */
class DashboardPage extends Component {
  componentDidMount() {
    const { dispatchUserInfo } = this.props;
    dispatchUserInfo();
  }

  handleEventSearch = (e) => {
    e.preventDefault();
    const { dispatchEventInfo, accessToken } = this.props;
    const query = e.target.children[0].value;
    dispatchEventInfo(accessToken, query);
  }

  render() {
    console.log(this.props, 'prooooooooooooops');
    const { events } = this.props;
    return (
      <div className="dashboard-container">
        <div className="search-event">
          <form className="search-event__form" onSubmit={this.handleEventSearch}>
            <input
              autoComplete="off"
              type="text"
              name="search-event"
              placeholder="Search an event"
              className="search-event__input"
              aria-label="Enter search text"
              onChange={this.handleInputChange}
            />
            <button type="submit" className="search-event__button">
              <SearchIcon />
              Search
            </button>
          </form>
          <p className="sign-out">
            <a href="/api/logout" className="btn btn--sign-out sign-out__button">Sign out</a>
          </p>
        </div>
        <div className="google-map">
          <MapComponent events={events} />
        </div>
      </div>
    );
  }
}

DashboardPage.defaultProps = {
  dispatchUserInfo: null,
  dispatchEventInfo: null,
  accessToken: ''
};

DashboardPage.propTypes = {
  dispatchUserInfo: PropTypes.func,
  dispatchEventInfo: PropTypes.func,
  accessToken: PropTypes.string
};

const mapStateToProps = (state) => {
  const name = state.userReducer.name || '';
  const accessToken = state.userReducer.accessToken || '';
  const events = state.eventReducer || [];
  return {
    name,
    accessToken,
    events
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchEventInfo(query, token) {
    dispatch(getEventInfo(query, token));
  },
  dispatchUserInfo() {
    dispatch(getUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
