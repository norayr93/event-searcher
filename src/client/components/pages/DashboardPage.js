import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '../SvgIcons';
import MapComponent from '../Map';
import { getEventInfo } from '../../actions';

class DashboardPage extends Component {
  handleEventSearch(e) {
    e.preventDefault();
    const query = e.target.children[0].value;
  }

  render() {
    console.log(this.props, 'prooooooooooooooops');
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
          <MapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGCyELoQaEHdu5GWT5WPTYU-T811MA4SY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'staeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
  return {
    name: state.userReducer.name,
    accesstoken: state.uderReducer.accesstoken
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchEventInfo() {
    dispatch(getEventInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
