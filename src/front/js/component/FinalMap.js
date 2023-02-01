import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Sidebar from "./componentes de prueba/Sidebar";
("../../styles/index.css");
import { Link } from "react-router-dom";

const styles = {
  width: "100%",
  height: "465px",
  position: "relative",
};

const FinalMap = () => {
  const [map, setMap] = useState(null);
  /* const [city, setCity] = useState([]); */
  const mapContainer = useRef(null);

  const print = () => {
    console.log("446645");
  };

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/offer")
      .then((response) => response.json())
      .then((response) => {
        if (!map) {
          initializeMap({ setMap, mapContainer, ofertas: response });
          const buttons = document.querySelectorAll(".btn-map");
          console.log(buttons);
          buttons.forEach((element) => {
            console.log(element);
            element.addEventListener("click", () => {
              console.log("651651164");
            });
          });
        } else {
          const buttons = document.querySelectorAll(".btn-map");
          console.log(buttons);
          buttons.forEach((element) => {
            console.log(element);
            element.addEventListener("click", () => {
              console.log("651651164");
            });
          });
        }
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
      var el = document.createElement("div");
      el.className = "marker";
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
          ${
            localStorage.getItem("token")
              ? `<a 
                href=${"/ofertas/" + oferta.id}
                class="btn-map btn btn-outline-danger btn-sm"
              >
                Me gusta!
              </a>`
              : ""
          }`)
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

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={styles}
      id="map"
    ></div>
  );
};

export default FinalMap;

/* const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Popup de prueba.'
  ); */
