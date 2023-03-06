import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";
import ReactPasswordChecklist from "react-password-checklist";
import Swal from "sweetalert2";

const UserRegister = () => {
  const [formData, setFormData] = useState({});
  const [shownPassword, setShownPassword] = useState(true); // para mostar contraseña
  const [shownPassword2, setShownPassword2] = useState(true);
  // const [city, setCity] = useState([]);
  const [check, setCheck] = useState(true);

  const navigate = useNavigate();

  const password = () => {
    setShownPassword(!shownPassword);
  };

  const password2 = () => {
    setShownPassword2(!shownPassword2);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // useEffect(() => {
  //   // fetch(process.env.BACKEND_URL + "/api/city")
  //   //   .then((response) => response.json())
  //   //   .then((response) => {
  //   //     setCity(response);
  //   //   });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.password2) {
      fetch(process.env.BACKEND_URL + "/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status == 200) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "¡Registrado con éxito!",
              text: "El registro se ha completado correctamente, puede iniciar sesión!",
            });
            navigate("/inicio-sesion");
          }
          if (response.status == 400) {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Oops...",
              text: "El registro no ha podido completarse, vuelva a intentarlo...",
            });
            navigate("/registro");
          }
          response.json();
        })
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
          <p className="fs-1 font-change">Registro de usuarios</p>
          <p className="fs-3 font-change">
            ¡Rellena el formulario para empezar a comparar ofertas!
          </p>
        </div>

        <div className="container bg-danger col-md-8 px-3 py-3 mt-2 mb-5">
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Nombre y Apellidos"
              name="name"
              onChange={handleChange}
              required
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
            />
            <label htmlFor="floatingInput">
              Dirección de correo electrónico*
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={shownPassword ? "password" : "text"}
              className="form-control"
              id="floatingPassword"
              placeholder="contraseña"
              name="password"
              onChange={handleChange}
              required
            />
            <a href="#" onClick={password}>
              <i
                className={shownPassword ? "far fa-eye-slash" : "far fa-eye"}
              ></i>{" "}
            </a>
            <label htmlFor="floatingInput">Contraseña*</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={shownPassword2 ? "password" : "text"}
              className="form-control"
              id="floatingPassword"
              placeholder="Repetir Contraseña"
              name="password2"
              onChange={handleChange}
              required
            />
            <a href="#" onClick={password2}>
              <i
                className={shownPassword2 ? "far fa-eye-slash" : "far fa-eye"}
              ></i>
            </a>

            <label htmlFor="floatingInput">Repetir contraseña*</label>
          </div>
          {/* <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="city"
            onChange={handleChange}
            required
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
          </select> */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              required
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
            <button
              type="submit"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enviar
            </button>
          </div>
        
          <div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {/* {  response.status == 200 }<p>Modal body text goes here.</p>   aqui va un if ternario con lo que se quiere motrar, pero no se si response.status lo lea  */}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
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
