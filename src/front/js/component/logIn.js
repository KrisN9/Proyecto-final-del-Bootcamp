import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import "../../styles/login.css";
import Swal from "sweetalert2";

const LogIn = () => {
  const [formData, setFormData] = useState({});
  const [shownUser, setShownUser] = useState(false); //para mostar contraseña
  const [shownSupplier, setShownSupplier] = useState(false);

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const user = () => {
    setShownUser(!shownUser);
  };
  const supplier = () => {
    setShownSupplier(!shownSupplier);
  };

  const handleClickUser = () => {
    const optionUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(process.env.BACKEND_URL + "/api/login-user", optionUser)
      .then((response) => {
        if (response.status == 200) return response.json();
        else
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "Correo electronico o contraseña incorrectos. ¡Inténtalo de nuevo!",
          });
      })
      .then((response) => {
        actions.setToken(response);
        localStorage.setItem("type", "user");
        navigate("/area-privada-usuario");
      });
  };

  const handleClickSupplier = () => {
    const optionSupplier = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(process.env.BACKEND_URL + "/api/login-supplier", optionSupplier)
      .then((response) => {
        if (response.status === 200) return response.json();
        else
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "Correo electronico o contraseña incorrectos. ¡Inténtalo de nuevo!",
          });
      })
      .then((response) => {
        actions.setToken(response);
        localStorage.setItem("type", "supplier");
        navigate("/area-privada-proveedor");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-fluid" id="background-image">
        <div className="row text-center mb-3 mt-3">
          <div className="col-md-6 col-sm-6 mt-5 mb-5">
            <p className="fs-1 font-change mt-5">Iniciar sesión como usuario</p>
            <div className="col-6 mx-auto mb-5">
              <button
                className="btn btn-danger btn-lg mb-5"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalUsuario"
              >
                Iniciar sesión
              </button>
              <div
                className="modal fade"
                id="modalUsuario"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    {/*modal para usuario*/}
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 fst-italic"
                        id="exampleModalLabel"
                      >
                        Usuario
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">
                          Dirección de correo electrónico*
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={shownUser ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="contraseña"
                        />
                        <a href="#" onClick={user}>
                          <i
                            className={
                              shownUser ? "far fa-eye-slash" : "far fa-eye"
                            }
                          ></i>
                        </a>
                        <label htmlFor="floatingPassword">Contraseña*</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleClickUser}
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*modal para proveedor*/}

          <div className="col-md-6 col-sm-6 mt-5 mb-5">
            <p className="fs-1 font-change mt-5">Iniciar sesión como proveedor</p>
            <div className="col-6 mx-auto mb-5">
              <button
                className="btn btn-danger btn-lg mb-5"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalProveedor"
              >
                Iniciar sesión
              </button>
              <div
                className="modal fade"
                id="modalProveedor"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 fst-italic"
                        id="exampleModalLabel"
                      >
                        Proveedor
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          className="form-control"
                          id="floatingInput1"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput1">
                          Dirección de correo electrónico*
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={shownSupplier ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                          className="form-control"
                          id="floatingPassword1"
                          placeholder="contraseña"
                        />
                        <a href="#" onClick={supplier}>
                          <i
                            className={
                              shownSupplier ? "far fa-eye-slash" : "far fa-eye"
                            }
                          ></i>
                        </a>
                        <label htmlFor="floatingPassword1">Contraseña*</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleClickSupplier}
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;

//const [meVaBien, setMeVaBien] = useState(true);
//   useEffect(() => {
//     console.log("Esta linea de codigo se ejecuta cuando haya un cambio en meVaBien, shownUser o formData (las que están dentro del array, linea 25)");
//   }, [meVaBien, shownUser, formData]);

//   useEffect(() => {
//     console.log(
//       "Esta linea de codigo se ejecuta cuando se cargue o se actualice el componente"
//     );
//   }, [])
