import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

const map = () => {
    return (
        <GoogleMap
        defaultZoom={10} 
        defaultCenter={{lat: 40.412981, lng: -3.700011}} />
    );
}

const wrappedMap = withScriptjs(withGoogleMap(map));

export default function Home () {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <wrappedMap googleMapURL={'https://www.google.es/maps/@40.4123365,-3.699164,13.7z?hl=es'}
            loadingElement={<div style={{height: "100%" }} />}
            containerElement={<div style={{height: "100%" }} />}
            mapElement={<div style={{height: "100%" }} />}
            />
	    </div>
    )
}