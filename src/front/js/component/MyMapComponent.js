import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

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

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.41397175226467, lng: () => -3.70315046264256 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={(address) => {
          console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Tu búsqueda aquí..."
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}


export default MyMapComponent;