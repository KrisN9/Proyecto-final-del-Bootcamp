import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Slide from "../component/slide";
import MyMapComponent from "../component/MyMapComponent";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-3">
      <Slide />

    </div>
  );
};
