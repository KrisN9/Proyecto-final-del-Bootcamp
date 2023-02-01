import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/sidebar.css";
import Slide from "../component/slide";
import ContactForm from "../component/ContactForm";
import SupplierRegister from "../component/SupplierRegister";
import UserRegister from "../component/UserRegister";
import Cards from "../component/Cards";
import FinalMap from "../component/FinalMap";
import Sidebar from "../component/componentes de prueba/Sidebar";
import { Link } from "react-router-dom";
import OfferList from "../component/OfferList";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
	<>
    <div className="text-center mt-3">
			<h3>¡Si te gustan estas ofertas, busca en el mapa las más cercanas a ti!</h3>
		<br></br>
      <Slide />
   
	<br></br>
	
	<div className="row">
	<div className="col-md-6 offset-md-3 mb-5">
		{/* <Sidebar/> */}
		<div className="map">
		<FinalMap />
		</div>

	</div>
	</div>
	</div>
	
	</>
  );
};
