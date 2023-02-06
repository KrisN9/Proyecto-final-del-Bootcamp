import React, { useState, useEffect } from "react";


const OfferCards = () => {
  const [offers, setOffers] = useState([]);
  const [input, setInput] = useState({});
 

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const offer = {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem("token"),
      },
      
    };
    fetch(process.env.BACKEND_URL + "/api/supplier/offer", offer)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
         setOffers(response);
      });  
  }, []);

 

  const remove = (offer_id) => {
    const remove = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/delete_offer/" + offer_id, remove)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
       console.log(response)
      });
  };

  const toUpDate = (offer_id) => {
    const modificar = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(input),
    };
    fetch(process.env.BACKEND_URL + "/api/offer/" + offer_id, modificar)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response)
      });
  };

  return (
    <div className="container col-12 col-md-6 mt-4 mb-3">
      <div className="mt-3">
        <p className="text-center fst-italic fs-3 text-danger">
          {" "}
          Tienes {offers.length} ofertas.
        </p>
        {offers.map((offer, index) => {
          return (
            <div className="card mb-3" key={index}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={offer.url_image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>

                <div className="col-md-7">
                  <div className="card-body text-center">
                    <h5 className="card-title fs-3 fw-bolder">
                      {offer.company_name}
                    </h5>
                    {/*Nombre de la empresa */}
                    <p className="card-text">{offer.title}</p>
                    {/* aqui va la descripcion de la oferta */}
                  </div>
                </div>
                <div className="col-md-2 mt-3">
                  <p>Precio:{offer.price}€</p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => remove(offer.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit}>
                        <div className="container ">
                          <div className="mt-2">
                            <p className="fs-6 text-success">title </p>
                            <input
                              type="name"
                              className="form-control"
                              id="floatingName"
                              placeholder="title"
                              name="title"
                              onChange={handleChange}
                              defaultValue={offer.title}
                            />
                          </div>
                          <div className="mt-2">
                            <p className="fs-6 text-success">Precio </p>
                            <input
                              type="name"
                              className="form-control"
                              id="floatingName"
                              placeholder="Precio"
                              name="Precio"
                              onChange={handleChange}
                              defaultValue={offer.price}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => toUpDate(offer.id)}
                      >
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OfferCards;
