import * as React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker
} from 'react-google-maps';

interface event {
  venue: {
    latitude: string,
    longitude: string
  },
  id: string,
}

/* eslint react/prop-types: 0 */
const MapComponent = ({ events }: {events: object[]}) => {
  const filteredEvents = events.filter((event: event): boolean => (!!event.venue));
  const Map = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 40.101200, lng: 44.808895 }}
    >
      {!events.length && (
      <Marker position={{ lat: 40.1792, lng: 44.4991 }} />
      ) }
      {filteredEvents.map((event: event): React.ReactNode => (
        <Marker
          key={event.id}
          position={{ lat: Number(event.venue.latitude), lng: Number(event.venue.longitude) }}
        />
      ))}
    </GoogleMap>
  )));

  return (
    <Map
      // isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGCyELoQaEHdu5GWT5WPTYU-T811MA4SY&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
};


export default MapComponent;
