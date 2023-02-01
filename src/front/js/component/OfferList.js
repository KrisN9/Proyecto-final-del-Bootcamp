import React from "react";
import OfferListCard from "./OfferListCard";
import { useParams } from "react-router-dom";

const OfferList = () => {
  const params = useParams()
  return (
    <>
      <br></br>
      <div className="text-center">
        <h1>
          ¡Aquí podrás ver nuestras mejores ofertas, y elegir tu preferida!
        </h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-12" id="ListCard">
          <OfferListCard id={params.id} />
        </div>
      </div>

      <br></br>
    </>
  );
};

export default OfferList;
