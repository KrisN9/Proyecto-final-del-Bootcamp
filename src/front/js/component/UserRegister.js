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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password1 === formData.password2) {
      fetch(process.env.BACKEND_URL + "/api/register-user", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
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
              type={password.shown1 ? "password" : "text"}
              className="form-control"
              id="floatingPassword"
              placeholder="contraseña"
              name="password1"
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
            <option value="Álava/Araba">Álava/Araba</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almería">Almería</option>
            <option value="Asturias">Asturias</option>
            <option value="Ávila">Ávila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Baleares">Baleares</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Burgos">Burgos</option>
            <option value="Cáceres">Cáceres</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castellón">Castellón</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Ciudad Real">Ciudad Real</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Gerona/Girona">Gerona/Girona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Jaén">Jaén</option>
            <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Las Palmas">Las Palmas</option>
            <option value="León">León</option>
            <option value="Lérida/Lleida">Lérida/Lleida</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="Málaga">Málaga</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Orense/Ourense">Orense/Ourense</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
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
