import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "465px",
};

const center = {
  lat: 40.41397175226467,
  lng: -3.70315046264256,
};

const options = {
  zoomControl: true,
};

export default function TestMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >

        {/* {markers.map(marker => <Marker key={marker.time.toISOstring()} position={{lat: marker.lat, lng: marker.lng}} />)} */}

      </GoogleMap>
    </div>
  );
}
