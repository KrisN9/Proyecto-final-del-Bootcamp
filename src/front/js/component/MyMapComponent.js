import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
/* import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete"; */
/* import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"; */

const containerStyle = {
  width: '100%',
  height: '465px'
};

const center = {
  lat: 40.41397175226467,
  lng: -3.70315046264256
};

function MyMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    /* map.fitBounds(bounds); */

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
        </>
      </GoogleMap>
  ) : <></>
}

export default MyMapComponent;