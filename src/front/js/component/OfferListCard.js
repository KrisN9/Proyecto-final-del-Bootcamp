import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const OfferListCard = (props) => {
  const [offer, setOffer] = useState();
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/offer/" + props.id)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOffer(response);
      });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (localStorage.getItem('token') === "user") {
      fetch (process.env.BACKEND_URL + "/api/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favorite),
      })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => alert(error));
    }
  };
    


  return offer ? (
    <>
      <div className="card ms-5 me-3 mb-5">
        <img src={offer.url_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{offer.company_name}</h5>
          <p className="card-text">{offer.title}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: {offer.price}</li>
          <li className="list-group-item">Ubicación: {offer.location}</li>
        </ul>
        <div className="card-body d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-outline-danger" onClick={handleClick}>Añadir a favoritos <i className="fas fa-heart"></i> </button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default OfferListCard;
