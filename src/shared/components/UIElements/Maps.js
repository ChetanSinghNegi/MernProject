import React from "react";
import GoogleMapReact from "google-map-react";
import { BiSolidMapPin } from "react-icons/bi";
import "./Maps.css";

const Marker = ({ text }) => <div>{text}</div>;

const Maps = (props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={props.coordinates || defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={props.coordinates.lat || defaultProps.center.lat}
          lng={props.coordinates.lng || defaultProps.center.lng}
          text="Marker"
        />
        <BiSolidMapPin
          className="icon"
          lat={props.coordinates.lat || defaultProps.center.lat}
          lng={props.coordinates.lng || defaultProps.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Maps;
