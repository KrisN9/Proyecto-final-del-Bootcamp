import React, { useState, useEffect } from "react";
import "../../styles/userarea.css";

const User = () => {
  const [user, setUser] = useState([]);
  const [city, setCity] = useState([]);
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/city")
      .then((response) => response.json())
      .then((response) => {
        setCity(response);
      });
    getUser();
  }, []);
  const getUser = () => {
    const optionsUser = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/user", optionsUser)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setUser(response);
      });
  };

  const toUpDate = (user_id) => {
    const modificar = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(input),
    };
    fetch(process.env.BACKEND_URL + "/api/user/" + user_id, modificar)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        getUser();
      });
  };

  return (
    <div className="text-md-start mt-3 mb-3 fs-3 fw-semibold ">
      <ul>
        <li>
          <p className="font-change">Nombre: {user.name}</p>
        </li>
        <li>
          <p className="font-change">Correo Electronico: {user.email}</p>
        </li>
        <li>
          <p className="font-change">
            Número de teléfono : {user.telephone_number}
          </p>
        </li>
        <li>
          <p className="font-change">ciudad : {user.city}</p>
        </li>
      </ul>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          className="btn btn-secondary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Modificar datos de mi cuenta: <i className="fas fa-edit"></i>
        </button>
      </div>

      <div
        className="modal fade col-md-8"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title text-danger fs-5 font-change"
                id="staticBackdropLabel"
              >
                Modifica tus datos
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="container ">
                  <div className="mt-2">
                    <p className="fs-6 font-change">Nombre y Apellidos</p>
                    <input
                      type="name"
                      className="form-control"
                      id="floatingName"
                      placeholder="Nombre y Apellidos"
                      name="name"
                      onChange={handleChange}
                      defaultValue={user.name}
                    />
                  </div>

                  <div className="mt-2">
                    <p className="fs-6 font-change">
                      Dirección de correo electronico
                    </p>
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleChange}
                      defaultValue={user.email}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="fs-6 font-change">Número de teléfono</p>
                    <input
                      type="number"
                      className="form-control"
                      id="telephone_number"
                      placeholder="Número de teléfono"
                      name="telephone_number"
                      onChange={handleChange}
                      defaultValue={user.telephone_number}
                    />
                  </div>
                  <p className="fs-6 font-change">Ciudad</p>
                  <select
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
                  </select>
                </div>
              </form>
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
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => toUpDate(user.id)}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
