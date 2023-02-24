import React, { useEffect, useState } from "react";
import "../../styles/userarea.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = () => {
    fetch(process.env.BACKEND_URL + "/api/user/favorite", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFavorites(response);
      });
  };

  const removeFavorite = (favorite_id) => {
    console.log(favorite_id);
    const constfavorite = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(
      process.env.BACKEND_URL + "/api/delete_favorite/" + favorite_id,
      constfavorite
    )
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Eliminado correctamente",
            text: "La oferta se ha eliminado de Favoritos correctamente. ¡Prueba a encontrar más en nuestro mapa!",
          });
        }
        if (response.status == 400) {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "Algo ha fallado, vuelve a intentarlo...",
          });
        }
        return response.json();
      })
      .then((response) => {
        getFavorite();
      });
  };

  return (
    <div className="container col-12 col-md-6 mt-4">
      <div className="mt-3 pb-3 mb-3">
        <p className="text-center font-change fs-2 text-danger">
          Tienes {favorites.length} ofertas favoritas.
        </p>
        <button className="redirect btn btn-success" onClick={handleClick}>Ir al mapa para buscar favoritos <i className="bi bi-arrow-right-circle"></i></button>
        {favorites.map((favorite) => {
          return (
            <div className="card border-danger border-3 mb-3" key={favorite.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={favorite.offerlist.url_image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body text-center">
                    <h5 className="card-title fs-3 fw-bolder text-decoration-underline">
                      {favorite.offerlist.company_name}
                    </h5>
                    <p className="card-text"> {favorite.offerlist.title}</p>
                    <p>Precio:{favorite.offerlist.price}€</p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-12 mt-4">
                 
                  <button
                   target="_tab"
                   type="button"
                   onClick={() => window.open(favorite.offerlist.url, "_blank")}  //funcion para traer url de un favorito, incluido fetch
                  className="btn btn-warning float-left me-2 mb-2">
                    Pedir!
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mb-2"
                    onClick={() => removeFavorite(favorite.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

{
  /* <button type="button" className="btn btn-danger float-end me-3">
                    <i className="fas fa-heart"></i>
                  </button> */
}
