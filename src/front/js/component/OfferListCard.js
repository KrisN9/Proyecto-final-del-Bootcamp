import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/offerlistcard.css";
import Swal from "sweetalert2";

const OfferListCard = (props) => {
  const [offer, setOffer] = useState();
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

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
            navigate("/");

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
      <div id="img" className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-5">
          <img src={offer.url_image} className="card-img-top"  width="100" height="300" />
          </div>
          <div className="col-md-5 ">
            <div className="card-body mt-4">
            <h5 className="card-title text-decoration-underline">{offer.company_name}</h5>
            <p className="card-text">{offer.title}</p>
            <p className="card-text"> Precio: {offer.price}€</p>
            <p className="card-text">Ubicación: {offer.location}</p>
            </div>
          </div>
          <div className="col-md-2 mt-5 ">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            handleClick(offer.id);
            setFavorite(true);
          }}
        >
          Añadir a Favorito
          
        </button>
        
      </div>
        </div>
      </div>
      <i className="fal fa-arrow-alt-left"></i>
      <Link to="/" className=" mt-3 btn btn-success" type="button">
          Ir a mapa
        </Link> 

    
    </>
  ) : (
    ""
  );
};

export default OfferListCard;

 

// card-body d-grid gap-2 col-md-6 mx-auto

{
  /* <div className="card border-danger border-3 ms-5 me-5 mb-5 text-center">
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

</div> */
}
