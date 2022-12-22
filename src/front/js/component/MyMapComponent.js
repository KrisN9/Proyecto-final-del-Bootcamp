import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://www.google.es/maps/@40.4142268,-3.6961838,13.34z?hl=es",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.41721, lng: -3.70362 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.41721, lng: -3.70362 }} />}
  </GoogleMap>
)


export default MyMapComponent