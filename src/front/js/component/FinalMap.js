import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
"../../styles/index.css";

const styles = {
  width: "100%",
  height: "465px",
  position: "relative",
};

const FinalMap = () => {
  const [map, setMap] = useState(null);
/*   const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]); */
  const mapContainer = useRef(null);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/offer")
      .then((response) => response.json())
      .then((response) => {
        if (!map) initializeMap({ setMap, mapContainer, ofertas: response });
      });
  }, [map]);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3Jpc245IiwiYSI6ImNsZDV4Y2x0ZTByOHIzb2tianpoZ2xmeWgifQ.M8N3QZtBSFlC_MPoI-PVTQ";
  const initializeMap = ({ setMap, mapContainer, ofertas }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-3.70315046264256, 40.41397175226467],
      zoom: 3,
    });
    console.log(ofertas);
    ofertas.map((oferta) => {
      new mapboxgl.Marker({ color: "red" })
        .setLngLat([oferta.longitude, oferta.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 10 }).setHTML(`
          <img src=${oferta.url_image} width="60" height="60">,
          <br></br>
          ${oferta.title},
          <br></br> 
          ${oferta.price},
          <br></br>
          <button>Me gusta</button>`)
        )
        .addTo(map);
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: "red",
        draggable: true,
      },
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", () => {
      setMap(map);
      map.resize();
    });
  };

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default FinalMap;

/* const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Popup de prueba.'
  ); */
