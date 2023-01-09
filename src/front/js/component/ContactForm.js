import React, { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange =(event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit =(event)=>{
    event.preventDefault();   
   
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="text-center mt-3">
        <p className="fs-1 fw-bolder">Contacta con nosotros</p>{" "}
        <p className="fs-3 fst-italic">
          Rellena el formulario y contactaremos contigo
        </p>{" "} 
      </div>
      <div className="container bg-warning px-3 py-3 mt-2 mb-5">
        <div className="form-floating mb-3">
          <input
            type="name"
            value={contactName}
            className="form-control"
            id="floatingName"
            placeholder="Nombre y Apellidos"
            name="Nombre y Apellidos"
            onChange={handleChange}
            
          />
          <label htmlFor="floatingName">Nombre y Apellidos*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            value={contactEmail}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name=" Dirección de correo electrónico"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">
            Dirección de correo electrónico*
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="phone-number"
            value={phoneNumber}
            className="form-control"
            id="floatingNumber"
            placeholder="Número de teléfono"
            name="Número de teléfono"
            onChange={handleChange}
          />
          <label htmlFor="floatingNumber">Número de teléfono</label>
        </div>

        <div className="form-floating mb-3 ">
          <textarea
            className="form-control"
            id="exampleFormControlMessage"
            placeholder="Mensaje"
            value={message}
            rows="3"
            name="Mensaje"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="exampleFormControlMessage" className="form-label">
            Mensaje
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            He leído y consiento al contenido de la Información Legal y de
            Protección de Datos.
          </label>
        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-danger">
            Enviar
          </button>
        </div>
        
      </div>
      </form>
    </>
  );
};

export default ContactForm;
