import React, { useState } from "react";


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
      <div className="container col-md-6">
      <div className="text-center mt-3">
        <p className="fs-1 fw-bolder">Contacta con nosotros</p>
        <p className="fs-3 fst-italic">
          Rellena el formulario y contactaremos contigo
        </p>
      </div>
      <div className="container bg-warning px-3 py-3 mt-2 mb-5">
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
          <button type="submit" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>
            Enviar
          </button>
          <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>   
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>   
        </div>
          
        
      </div>
      </div>
      </form>
    </>
  );
};

export default ContactForm;
