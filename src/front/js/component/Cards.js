import React, { useEffect, useState } from "react";

const Cards = (props) => {

  const [favorites, setFavorites] = useState([]);

  /* useEffect(() => {
    const optionFavorite = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/favorite", optionFavorite)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFavorites(response);
      });
  }, []);

  const removeFavorite = (favorite_id) => {
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
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  }; */

  return (
    <div className="container col-12 col-md-6 mt-4">
      <div className="mt-3">
        {favorites.map((favorite) => {
          return (
            <div className="card mb-3" key={id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={favorite.url_image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body text-center">
                    <h5 className="card-title fs-3 fw-bolder">
                      {favorite.company_name}
                    </h5>
                    <p className="card-text"> {favorite.title}</p>
                  </div>
                </div>
                <div className="col-md-2 mt-2">
                  <p>Precio:{favorite.price}€</p>
                  <a
                    href={favorite.url}
                    target="_blanck"
                    type="button"
                    className="btn btn-warning float-end me-2 "
                  >
                    Pedir!
                  </a>
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

{/* <button
type="button"
className="btn btn-outline-secondary mt-2 mb-2"
onClick={() => removeFavorite(favorite.id)}
>
<i className="fas fa-trash-alt"></i>
</button> */}
