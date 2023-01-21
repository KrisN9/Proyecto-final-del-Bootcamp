import React, { Component } from "react";
import reactDom from "react-dom";
import mapboxgl from "mapbox-gl";
import Autofill from "./Autofill";

mapboxgl.accessToken='pk.eyJ1Ijoia3Jpc245IiwiYSI6ImNsZDV4Y2x0ZTByOHIzb2tianpoZ2xmeWgifQ.M8N3QZtBSFlC_MPoI-PVTQ';

class TestMap extends React.Component{

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

/*     data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		}) */

  }

  render(){
    return (
      <div>
        <Autofill />
        <div ref={el => this.mapContainer = el} style={{width:'100%', height:'465px'}} />
      </div>
    )
  }

}

export default TestMap;