import React from "react";
import Details from "../components/Details";
import { Locations } from "../components/Location";

const Contact = () => {
  return (
    <>
      <Details />
      <Locations
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyACmtp4yHrs3uOKLx3pqCwKVC97zwTxSj0&callback=Function.prototype"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      ;
    </>
  );
};

export default Contact;
