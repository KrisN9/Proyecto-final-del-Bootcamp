import React from "react";
import { useState } from "react";
import "../../styles/supplierarea.css";
import Swal from "sweetalert2";
import SupplierRegister from "./SupplierRegister";
import {Cloudinary} from '@cloudinary/url-gen'
import {Resize} from '@cloudinary/url-gen/actions'


const Offer = () => {
  const [formData, setFormData] = useState([]);
  const [image , setImage]= useState("");
  const [loading , setLoading]= useState(false);

  const upLoad=(e)=>{
// pendiente de terminar de instalar cloudinary
  }
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target.reset();
  };

  const handleClick = () => {
    setFormData("");
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
      <div className="text-center mt-5 mb-5">
        <p className="fs-1 font-change">Rellena este formulario para añadir tu oferta</p>
      </div>
      <div className="container bg-danger px-3 py-3 mb-3 col-12 col-md-6">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Nombre de la empresa "
            name="company_name"
            onChange={handleChange}
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
          <button type="reset" className="btn btn-warning" onClick={handleClick}>
            Enviar
          </button>
          
        </div>
      </div>
    </form>
  );
};

export default Offer;

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
