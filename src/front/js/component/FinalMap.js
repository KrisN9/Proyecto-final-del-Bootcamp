import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Sidebar from "./componentes de prueba/Sidebar";
"../../styles/index.css";

const styles = {
  width: "100%",
  height: "465px",
  position: "relative",
};

const FinalMap = () => {
  const [map, setMap] = useState(null);
  const [city, setCity] = useState([]);
  const mapContainer = useRef(null);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/offer")
      .then((response) => response.json())
      .then((response) => {
        if (!map) initializeMap({ setMap, mapContainer, ofertas: response });
      });
  }, [map]);

/*   const handleChange = (event) => {
    useEffect(() => {
      fetch(process.env.BACKEND_URL + "/api/city")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCity(response);
      });
    }, []);
  } */

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
      var el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat([oferta.longitude, oferta.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 10, className: "apple-popup" }).setHTML(`
          <img src=${oferta.url_image} width="120" height="100">,
          <br></br>
          ${oferta.title},
          <br></br> 
          ${oferta.price},
          <br></br>
          <button class=" btn btn-outline-danger btn-sm">Me gusta!</button>`)
        )
        .addTo(map);

    function toggleSidebar(id) {
      const elem = document.getElementById(id);
      // Add or remove the 'collapsed' CSS class from the sidebar element.
      // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
      const collapsed = elem.classList.toggle('collapsed');
      const padding = {};
      // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
      padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
      // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
      map.easeTo({
      padding: padding,
      duration: 1000 // In ms. This matches the CSS transition duration property.
      });
      }

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: "red",
        draggable: true,
      },
      mapboxgl: mapboxgl,
    });

    /* map.addControl(geocoder); */
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", () => {
      setMap(map);
      map.resize();
      toggleSidebar('left');
    });
  });
};

  return (
  <div ref={(el) => (mapContainer.current = el)} style={styles} id="map">
    <div id="left" className="sidebar flex-center left collapsed">
      <div className="sidebar-content rounded-rect flex-center">
        Ubicaciones:
        <div className="sidebar-toggle rounded-rect left" onclick="toggleSidebar('left')">
        &rarr;
        </div>
      </div>
    </div>
  </div>);
};

export default FinalMap;

/* const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Popup de prueba.'
  ); */
