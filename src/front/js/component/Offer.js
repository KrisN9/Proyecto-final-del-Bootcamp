import React from "react";
import { useState } from "react";
import "../../styles/supplierarea.css";
import Swal from "sweetalert2";
import SupplierRegister from "./SupplierRegister";

const Offer = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "¡Oferta creada!",
            text: "Se ha creado con exito",
          });
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "¡Algo ha salido mal, inténtalo de nuevo!",
          });
        }
        response.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mt-5">
        <p className="fs-1 font-change">
          Rellena este formulario para añadir tu oferta
        </p>
      </div>
      <div className="container bg-warning px-3 py-3 mb-5 mb-5 col-12 col-md-8">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Nombre de la empresa "
            name="company_name"
            onChange={handleChange}
            value={formData.company_name}
            required
          />
          <label htmlFor="floatingName">Nombre de la empresa*</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Descripción de la oferta "
            name="title"
            onChange={handleChange}
            value={formData.title}
            required
          />
          <label htmlFor="floatingTitle">Descripción de la oferta*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="price"
            className="form-control"
            id="floatingPrice"
            placeholder="Precio de oferta"
            name="price"
            onChange={handleChange}
            value={formData.price}
            required
          />
          <label htmlFor="floatingPrice">Precio de oferta*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="floatingUrl"
            placeholder="url"
            name="url"
            onChange={handleChange}
            value={formData.url}
            required
          />
          <label htmlFor="floatingPrice">Dirección página web*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="location"
            className="form-control"
            id="floatingLocation"
            placeholder="location"
            name="location"
            onChange={handleChange}
            value={formData.location}
            required
          />
          <label htmlFor="floatingLocation">Ubicación*</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="url_image"
            className="form-control"
            id="floatingUrlImage"
            placeholder="imagen"
            name="url_image"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingName">Url de imagen*</label>
        </div>

        <div className="col-12">
          <button
            type="reset"
            className="btn btn-danger"
            onClick={handleSubmit}
          >
            Enviar
          </button>
          {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       hola
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
        </div>
      </div>
    </form>
  );
};

export default Offer;

{
  /* { upDate  ? "Ha fallado algo! Intentalo de nuevo" : "Tu oferta ha sido creada con exito " }  */
}

// <div className="mb-3 text-start">
// <label htmlFor="floatingUrl" className="form-label">Añadir url de empresa </label>
// <input className="form-control form-control-sm"
//  id="floatingUrl"
//  name="url"
//  type="file"
//  onChange={handleChange}/>
// </div>

// <div className="mb-3 text-start ">
// <label htmlFor="floatingImage" className="form-label">
//   Añadir Imagen
// </label>
// <input
//   className="form-control form-control-sm"
//   id="floatingImage"
//   name="url_image"
//   type="file"
//   onChange={handleChange}
// />
// </div>
