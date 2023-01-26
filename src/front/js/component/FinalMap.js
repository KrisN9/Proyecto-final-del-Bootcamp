import React, { Component, useEffect, useState } from "react";
import reactDom from "react-dom";
import mapboxgl from "mapbox-gl";
/* import Autofill from "./Autofill"; */


mapboxgl.accessToken='pk.eyJ1Ijoia3Jpc245IiwiYSI6ImNsZDV4Y2x0ZTByOHIzb2tianpoZ2xmeWgifQ.M8N3QZtBSFlC_MPoI-PVTQ';

class FinalMap extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lng: -3.70315046264256,
      lat: 40.41397175226467,
      zoom: 10
    }
  }

  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    const CustomMarkers = () => {
      /* const [latitude, setLatitude] = useState([]);
         const [longitude, setLongitude] = useState([]); */
      
      useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/offer")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
      }, []);
    }

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
      color: 'red',
      draggable: true,
      },
      mapboxgl: mapboxgl
      });
       
      map.addControl(geocoder);

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

  }

  render(){
    return (
      <>
      <div>
        {/* <Autofill /> */}
      </div>
      <div>
        <div ref={el => this.mapContainer = el} style={{width:'100%', height:'465px'}} />
      </div>
      </>
    )
  }

}

export default FinalMap;

/*     const marker1 = new mapboxgl.Marker({color: "red", draggable: true})
    .setLngLat([-3.70315046264256, 40.41397175226467])
    .addTo(map); */

/* const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Popup de prueba.'
  ); */