import React from "react";

const ContactForm = () => {
  return (
    <>
    <div className="text-center mt-3">
    <p className="fs-1 fw-bolder">Contacta con nosotros</p> {/* creo que esta bien, pero hay que revisarlo */}
	  <p className="fs-3 fst-italic" >Rellena el formulario y contactaremos contigo</p> {/*creo que esta bien, pero hay que revisarlo*/}
    </div>
    <div className="container bg-warning px-3 py-3 mt-2 mb-5">
      <div className="form-floating mb-3">
        <input
          type="name"
          className="form-control"
          id="floatingName"
          placeholder="Nombre y Apellidos"
        />
        <label for="floatingName">Nombre y Apellidos*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Dirección de correo electrónico*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="phone-number"
          className="form-control"
          id="floatingNumber"
          placeholder="Número de teléfono"
        />
        <label for="floatingNumber">Número de teléfono</label>
      </div>
 
      <div className="form-floating mb-3 " >  
        <textarea
          className="form-control "
          id="exampleFormControlMessage"
          placeholder="Mensaje"
          rows="3"

        ></textarea>

        <label for="exampleFormControlMessage" className="form-label">
          Mensaje
        </label>
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
            He leído y consiento al contenido de la Información Legal y de Protección de Datos.
        </label>
        </div>
        <div className="col-12 mb-3">
            <button type="submit" className="btn btn-danger">Enviar</button>
        </div>
    </div>
    </>
  );
};

export default ContactForm;
