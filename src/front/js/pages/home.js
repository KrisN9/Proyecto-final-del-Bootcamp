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

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
	<>
    <div className="text-center mt-3">
      <Slide />
    </div>
	<div className="col-6 mt-5 ms-auto me-5">
		<div className="me-5">
			<SearchBar />
			<MyMapComponent isMarkerShown />
		</div>
	</div>
	</>
  );
};
