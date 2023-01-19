import React from "react";
import { useState, useEffect } from "react";

const UserRegister = () => {
  const [formData, setFormData] = useState({});
  // const [shownPassword, setShownPassword] = useState(true);   // para mostar contraseña
  // const [shownPassword2, setShownPassword2] = useState(true);
  const [password, setPassword] = useState({ shown1: false, shown2: false });
  const [city, setCity] = useState([]);
  const [check, setCheck] = useState(true);

  // const password = () =>{
  //   setShownPassword(!shownPassword)
  // } ;

  // const password2 = () => {
  //   setShownPassword2(!shownPassword2)
  // };

  const shownPassword = () => {
    setPassword({ ...password });
    //shown1:"false", shown2:"false"
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    fetch(
      process.env.BACKEND_URL + "/api/city"
    )
      .then((response) => response.json())
      .then((response) => {
        setCity(response);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.password2) {
      fetch(
        process.env.BACKEND_URL + "/api/register-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => alert(error));
    }
  };

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
              name="name"
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
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">
              Dirección de correo electrónico*
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={password.shown1 ? "password" : "text"}
              className="form-control"
              id="floatingPassword"
              placeholder="contraseña"
              name="password"
              onChange={handleChange}
            />
            <a href="#" onClick={shownPassword}>
              <i
                className={password.shown1 ? "far fa-eye" : "far fa-eye-slash"}
              ></i>{" "}
            </a>
            <label htmlFor="floatingInput">Contraseña*</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={password.shown2 ? "password" : "text"}
              className="form-control"
              id="floatingPassword"
              placeholder="Repetir Contraseña"
              name="password2"
              onChange={handleChange}
            />
            <a href="#" onClick={shownPassword}>
              <i
                className={password.shown2 ? "far fa-eye" : "far fa-eye-slash"}
              ></i>{" "}
            </a>

            <label htmlFor="floatingInput">Repetir contraseña*</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="phone-number"
              className="form-control"
              id="floatingNumber"
              placeholder="Número de teléfono"
              name="telephone_number"
              onChange={handleChange}
            />
            <label htmlFor="floatingNumber">Número de teléfono</label>
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="city"
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
            <label
              className="form-check-label"
              htmlFor="defaultCheck1"
              onClick={() => setCheck()}
            >
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

/// FETCH PARA HACER EL REGISTRO.

// const handleClickUser=()=>{
// const option ={

//      method: 'POST',//  metodo post porq se crea token
// 		body: JSON.stringify(formData),//   se envia "email" y" constraseña" que se ingresa en el Input.
// 		headers: {
// 		  "Content-Type": "application/json",

//                 }
//             }

//  useEffect(()=>{
//  fetch(process.env.BACKEND_URL + "/api/register-supplier", option)
//  .then((response)=>{
//      response.json()
//      })
//      .then((response)=>{                    /// se tiene que almacenar el token en localstorage o session storage depende lo que se quiera almacenar
//       localStorage.setItem("token", response.token)          ¡  ///      localStorage : es una pequeña base de datos q se encuentra en los navegadores.
//         })                                                /// localStrogare.setItem("se guarda con cualquier nombre ", informacion que se quiere guardar"token" )
//                                                          /// localStrogare.getItem: se utiliza para obtener informacion privada  del usuario con token.
// })

//  })
// }
