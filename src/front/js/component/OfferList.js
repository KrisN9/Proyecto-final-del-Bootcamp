import React from "react";
import OfferListCard from "./OfferListCard";

const OfferList = () => {
    return (
        <>
        <br></br>
    <div className="text-center">
        <h1>¡Aquí podrás ver nuestras mejores ofertas, y elegir tu preferida!</h1>
    </div>
        <br></br>
    <div className="row">
        <div className="col-4">
            <OfferListCard />
        </div>
        <div className="col-4">
            <OfferListCard />
        </div>
        <div className="col-4">
            <OfferListCard />
        </div>
    </div>

       <br></br> 

        </>
)}

export default OfferList;