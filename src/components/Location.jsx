import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const Locations = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.0583, lng: -74.4057 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 40.0583, lng: -74.4057 }} />
      )}
    </GoogleMap>
  ))
);
