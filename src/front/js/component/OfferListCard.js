import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteContext from "../store/FavoriteContext";

const OfferListCard = (props) => {
  const [offer, setOffer] = useState();
  /*  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate(); */

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/offer/" + props.id)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOffer(response);
      });
  }, []);

  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(offer.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: offer.id,
/*         image: offer.url_image,
        company_name: offer.company_name,
        title: offer.title,
        price: offer.price,
        location: offer.location, */
      });
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
          <button
            className="btn btn-outline-danger"
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
            {/* <i className="fas fa-heart"></i> */}
          </button>
        </div>
        {/* {favorite === true && navigate("/area-privada-usuario")} */}
      </div>
    </>
  ) : (
    ""
  );
};

export default OfferListCard;
