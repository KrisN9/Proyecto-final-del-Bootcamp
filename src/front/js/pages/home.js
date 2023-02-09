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
      <div className="text-center mt-3 back">
        <div className="container squar1 mt-5 mb-3 ">
          <p className="fs-1 text-success fst-italic">
            Aquí encontrarás tus restaurantes favoritos con las mejores ofertas
          </p>
        </div>
        <br></br>
        <Slide />

        <br></br>

        <div className="row">
          <div className="container squar1 mt-5 mb-3">
            <h3 className="fs-1 text-success fst-italic">
              ¡Si te gustan estas ofertas, busca en el mapa las más cercanas a
              ti!
            </h3>
          </div>
          <div className="container col-md-10  mt-4 mb-5 ">
            {/* <Sidebar/> */}
            <div className="map ">
              <FinalMap />
            </div>
          </div>
        </div>
			<br></br>

			
			
      </div>
    </>
  );
};