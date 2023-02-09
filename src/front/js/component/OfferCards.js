import React, { useState, useEffect } from "react";
import "../../styles/supplierarea.css";
import Swal from "sweetalert2";
import Modals from "./Modals";


const OfferCards = () => {
  const [offers, setOffers] = useState([]);
  // const [input, setInput] = useState({});
 

  // const handleChange = (event) => {
  //   setInput({ ...input, [event.target.name]: event.target.value });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = () => {
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

  };

  const removeOffer = (offer_id) => {
    const remove = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/delete_offer/" + offer_id, remove)
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Eliminado correctamente",
            text: "La oferta se ha eliminado correctamente. ¡Prueba a añadir otra en tu Área Privada!",
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
        getOffers();
      });
  };

/*   const removeOffer = (offer_id) => {
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
        getOffers(response);
      });
  }; */

  
  return (
    <div className="container col-12 col-md-6 mt-3 mb-3 ">
      <div className="mt-3 pb-3 mb-3">
        <p className="text-center font-change fs-2 text-danger">
          Tienes {offers.length} ofertas.
        </p>
        {offers.map((offer, index) => {
          return (
            <div className="card border-danger border-3 mb-3 " key={index}>
              <div className="row g-0">
                <div className="col-md-3 ">
                  <img
                    src={offer.url_image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>

                <div className="col-md-6">
                  <div className="card-body text-center">
                    <h5 className="card-title fs-3 fw-bolder">
                      {offer.company_name}
                    </h5>
                    {/*Nombre de la empresa */}
                    <p className="card-text">{offer.title}</p>
                    {/* aqui va la descripcion de la oferta */}
                  </div>
                </div>
                <div className="col-md-3 mt-2 "> 
                  <p>Precio:{offer.price}€</p>
                  <button
                    type="button"
                    className="btn btn-secondary mb-2"
                    onClick={() => removeOffer(offer.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                 {/*  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal" data-bs-target={offer.id.toString()}
                    
                  >
                    <i className="fas fa-edit"></i>
                  </button>

                  <Modals title={offer.title} price={offer.price} idModals={offer.id}  idModalLabel={offer.id + "label"}/>
                  </div> */}
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
