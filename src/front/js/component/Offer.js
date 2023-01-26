import React from "react";
import { useState } from "react";

const Offer = () => {          //revisar no funciona 
  const [formData, setFormData] = useState({});


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fetch(process.env.BACKEND_URL + "/api/offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer '+ localStorage.getItem('token')
      },
      body: JSON.stringify(formData),
      mode: "no-cors",
    })
      .then((response) => {
        if (response.status == 200) return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <p className="fs-1 fw-bolder">Añade tu oferta</p>
      </div>
      <div className="container bg-warning px-3 py-3 mt-2 mb-5 col-12 col-md-8">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Nombre de la empresa "
            name="company_name"
            onChange={handleChange}
          />
          <label htmlFor="floatingName">Nombre de la empresa </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Nombre del proveedor "
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="floatingName">Nombre del proveedor </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"   
            id="floatingTitle"
            placeholder="Descripción de la oferta "
            name="title"
            onChange={handleChange}
          />
          <label htmlFor="floatingTitle">Descripción de la oferta</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="price"
            className="form-control"
            id="floatingPrice"
            placeholder="Precio de oferta"
            name="price"
            onChange={handleChange}
          />
          <label htmlFor="floatingPrice">Precio de oferta</label>
        </div>
       <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="floatingUrl"
            placeholder="url"
            name="url"
            onChange={handleChange}
          />
          <label htmlFor="floatingPrice">Dirección página web</label>
        </div>
        <div className="mb-3 text-start ">
          <label htmlFor="floatingImage" className="form-label">Añadir Imagen</label>
          <input className="form-control form-control-sm" 
          id="floatingImage" 
          name="url_image" 
          type="file"
          onChange={handleChange}/>
       </div>
        
        <div className="col-12 mb-3">
          <button data-bs-toggle="modal" data-bs-target="#exampleModal"
            type="submit"
            className="btn btn-danger"
            onClick={handleClick}
          >
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

{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        " Tu oferta ha sido creada" :"Algo a salido mal.Intentalo otra vez."
      
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>  */}