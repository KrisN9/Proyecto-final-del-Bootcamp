import React, { useState } from "react";
import "../../styles/contactform.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({ });
  const [check, setCheck] = useState(true);
  

  
  const handleChange =(event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit =(event)=>{
    event.preventDefault();   
    setFormData({});  
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container col-md-6" id="contactpic">
      <div className="text-center mt-3">
        <p className="fs-1 font-change">Contacta con nosotros</p>
        <p className="fs-3 font-change">
          Rellena el formulario y contactaremos contigo
        </p>
      </div>
      <div className="container col-md-7 bg-danger px-3 py-3 mt-2 mb-5">
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Nombre y Apellidos"
            name="name"
            onChange={handleChange}
            required
            value ={formData.name}
            
          />
          <label htmlFor="floatingName">Nombre y Apellidos*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            required
            value ={formData.email}
          />
          <label htmlFor="floatingInput">
            Dirección de correo electrónico*
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="phone-number"
            className="form-control"
            id="floatingNumber"
            placeholder="telephone_number"
            name="telephone_number"
            onChange={handleChange}
            value ={formData.telephone_number}
          />
          <label htmlFor="floatingNumber">Número de teléfono</label>
        </div>

        <div className="form-floating mb-3 ">
          <textarea
            className="form-control"
            id="exampleFormControlMessage"
            placeholder="Mensaje"
            rows="3"
            name="Mensaje"
            onChange={handleChange}
            required
            value ={formData.mensaje}
          ></textarea>

          <label htmlFor="exampleFormControlMessage" className="form-label">
            Mensaje*
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            required
          />
          <label className="form-check-label" htmlFor="defaultCheck1" onClick={() => setCheck()}>
            He leído y consiento al contenido de la Información Legal y de
            Protección de Datos.
          </label>
        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>
            Enviar
          </button>
        
        </div>
      </div>
      </div>
      </form>
    </>
  );
};

export default ContactForm;
