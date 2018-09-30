import * as React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '../SvgIcons';
import MapComponent from '../Map';
import { getEventInfo, getUserInfo } from '../../actions';

// interface StateProps {
//   userReducer: {
//     accessToken: string
//   },
//   eventReducer: {
//     events: object[]
//   }
// }
     
// interface DispatchProps {
//   dispatchUserInfo: () => void;
//   dispatchEventInfo: (accessToken: string, query: string) => void;
//   type: string
// }

interface OwnProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  accessToken: string,
  events: object[]
}

type Props  =ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & OwnProps;

class DashboardPage extends React.Component<Props, {}> {              
  componentDidMount() {
    const { dispatchUserInfo } = this.props;
    dispatchUserInfo();
  }

  handleEventSearch = (event: any): void => {
    event.preventDefault();
    const { dispatchEventInfo, accessToken } = this.props;
    const query: string = event.target.children[0].value;
    dispatchEventInfo(accessToken, query);
  }

  render() { 
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

const mapStateToProps: any = (state: ReturnType<typeof mapStateToProps>) => {
  const accessToken = state.userReducer.accessToken || '';
  const events = state.eventReducer || [];
  return {
    accessToken,
    events
  };
};

const mapDispatchToProps: any = (dispatch: ReturnType<typeof mapDispatchToProps>) => ({
  dispatchEventInfo(query: string, token: string) {
    dispatch(getEventInfo(query, token));
  },
  dispatchUserInfo() {
    dispatch(getUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
