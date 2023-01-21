import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Slide from "../component/slide";
import MyMapComponent from "../component/MyMapComponent";
import ContactForm from "../component/ContactForm";
import SearchBar from "../component/SearchBar";
import SupplierRegister from "../component/SupplierRegister";
import UserRegister from "../component/UserRegister";
import Cards from "../component/Cards";
import TestMap from "../component/TestMap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
	<>
    <div className="text-center mt-3">
      <Slide />
   
	<br></br>
	
	<div className="row">
	<div className="col-md-6 offset-md-3">
		<div className="map">
		<TestMap />
		</div>

	</div>
	</div>
	</div>
	
	</>
  );
};
