import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";
import ReactPasswordChecklist from "react-password-checklist";
import Swal from "sweetalert2";

// crear base de datos para la opcion ciudad, hacer fetch para visualizar.
const SupplierRegister = () => {
  const [formData, setFormData] = useState({});
  const [shownPassword, setShownPassword] = useState(true); // para mostar contraseña
  const [shownPassword2, setShownPassword2] = useState(true);
  const [city, setCity] = useState([]);
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

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/city")
      .then((response) => response.json())
      .then((response) => {
        setCity(response);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.password2) {
      fetch(process.env.BACKEND_URL + "/api/register-supplier", {
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
        <div className="text-center mt-3 font-change">
          <p className="fs-1 font-change">Registro de Proveedores</p>{" "}
          {/* falta corregir estilo de la letra*/}
          <p className="fs-3 font-change">
            ¡Rellena el formulario para empezar a enviar tus ofertas!
          </p>
          {/* falta corregir estilo de la letra*/}
        </div>
        <div className="container bg-danger col-md-8 px-3 py-3 mt-2 mb-5">
          <div className="form-floating mb-3">
            <input
              type="company-name"
              className="form-control"
              id="floatingName"
              placeholder="Nombre de la empresa"
              name="company_name"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInput">Nombre de la empresa*</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="company-number"
              className="form-control"
              id="floatingNumber"
              placeholder="CIF de la empresa"
              name="company_cif"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInput">CIF de la empresa*</label>
          </div>
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
            <label htmlFor="floatingName">
              Nombre y Apellidos de la persona de contacto*
            </label>
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

          {/*           <ReactPasswordChecklist rules={["minLength", "match"]}
          minLength={6}
          value={"password"}
          valueAgain={"password2"} 
          messages= {{
            minLength: "La contraseña tiene más de 6 caracteres.",
            match: "Las contraseñas coinciden."
          }}
          /> */}

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
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SupplierRegister;
