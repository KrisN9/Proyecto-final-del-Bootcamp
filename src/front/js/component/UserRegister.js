import React from "react";

const UserRegister = () => {
  return (
    <>
    <h1>Registro de usuarios</h1> {/* falta corregir estilo de la letra*/}
	<h3>Rellena el formulario para empezar a comparar ofertas!</h3> {/* falta corregir estilo de la letra*/}
    <div className="container bg-warning px-3 py-3">
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
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="contraseña"
        />
        <label for="floatingInput">Contraseña*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="repeat-password"
          className="form-control"
          id="floatingPassword"
          placeholder="Repetir Contraseña"
        />
        <label for="floatingInput">Repetir contraseña*</label>
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
      <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Ciudad(elegir de las indicadas en el desplegable)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
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

export default UserRegister;
