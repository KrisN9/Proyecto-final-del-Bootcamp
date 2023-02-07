import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const OfferListCard = (props) => {
  const [offer, setOffer] = useState();
  const [favorite, setFavorite] = useState(false);

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
    if (favorite === true) {
      fetch(process.env.BACKEND_URL + "/api/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ id_offer: event }),
      })
        .then((response) => {
          if (response.status == 200) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "¡Añadida con éxito!",
              text: "¡La oferta se ha agregado a Favoritos, puedes verla en tu Área Privada!",
            });
            if (response.status == 400) {
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops...",
                text: "Algo ha fallado, inténtalo de nuevo...",
              });
            }
          }
          response.json();
        })
        .then((response) => {
          setFavorite(response);
        });
    }
  };

  return offer ? (
    <>
      <div className="card border-danger ms-5 me-5 mb-5 text-center">
        <img src={offer.url_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{offer.company_name}</h5>
          <p className="card-text">{offer.title}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-danger">
            Precio: {offer.price}
          </li>
          <li className="list-group-item">Ubicación: {offer.location}</li>
        </ul>
        <div className="card-body d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-danger"
            onClick={() => {
              handleClick(offer.id);
              setFavorite(true);
            }}
          >
            Añadir a Favoritos<br></br>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default OfferListCard;
