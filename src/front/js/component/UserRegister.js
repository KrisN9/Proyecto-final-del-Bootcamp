import React from "react";
import { useState, useEffect} from "react";

const UserRegister = () => {
  const [formData, setFormData] = useState({});
  const [shownPassword, setShownPassword] = useState(false);   // para mostar contraseña
  const [shownPassword2, setShownPassword2] = useState(false);
  const [city, setCity] = useState([]);
  
  const password = () =>{
    setShownPassword(!shownPassword)
  } ;
  

  const password2 = () => {
    setShownPassword2(!shownPassword2)
  };
 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit =(event)=>{
    event.preventDefault();  
    if (formData.password1 === formData.password2){
      //useEffect(()=>{
      /*fetch(process.env.BACKEND_URL + '/api/register-user'), {
        method: 'POST',
        headers:
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
       });
       else ("msg": "The password is not repeated")
       */
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="text-center mt-3">
        <p className="fs-1 fw-bolder">Registro de usuarios</p>
        <p className="fs-3 fst-italic">
          Rellena el formulario para empezar a comparar ofertas!
        </p>
      </div>

      <div className="container bg-warning px-3 py-3 mt-2 mb-5">
        <div className="form-floating mb-3">
          <input
            type="name"
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
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="Dirección de correo electrónico"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">
            Dirección de correo electrónico*
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type={shownPassword ? 'text' : 'password'}
            className="form-control"
            id="floatingPassword"
            placeholder="contraseña"
            name="password1"  
            onChange={handleChange}  
          />  
          <a href="#" onClick={password}><i class={shownPassword ? "far fa-eye-slash" :"far fa-eye"}></i> </a>
          <label htmlFor="floatingInput">Contraseña*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type={shownPassword2 ? 'text' : 'password'}
            className="form-control"
            id="floatingPassword"
            placeholder="Repetir Contraseña"
            name="password2"
            onChange={handleChange}
          />
            <a href="#" onClick={password2}><i class={shownPassword2 ? "far fa-eye-slash" :"far fa-eye"}></i> </a>
        
          <label htmlFor="floatingInput">Repetir contraseña*</label>
          
        </div>
        <div className="form-floating mb-3">
          <input
            type="phone-number"
            className="form-control"
            id="floatingNumber"
            placeholder="Número de teléfono"
            name="Número de teléfono"
            onChange={handleChange}
          />
          <label htmlFor="floatingNumber">Número de teléfono</label>
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          name="Ciudad"
          onChange={handleChange}
        >
          <option disabled selected>
            Ciudad(elegir de las indicadas en el desplegable)*
          </option>
          {city.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.name}
                </option>
              );
            })}
        </select>
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

export default UserRegister;



// className={type=="password"?"far fa-eye-slash":"far fa-eye"}><i class="far fa-eye-slash"></i>  </a>