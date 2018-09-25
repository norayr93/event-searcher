import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker
} from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap(({ isMarkerShown }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.101200, lng: 44.808895 }}
  >
    {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)));


export default MapComponent;
