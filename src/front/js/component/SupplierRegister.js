import React from "react";
import { useState, useEffect } from "react";

// crear base de datos para la opcion ciudad, hacer fetch para visualizar.
const SupplierRegister = () => {
  const [formData, setFormData] = useState({});
  const [city, setCity]= useState([]);
  
 
  useEffect(()=>{
    fetch(process.env.BACKEND_URL + "va la direccion del api") //pendiente de revisar URL del api. 
    .then((response)=> response.json())
    .then((response)=>{
      setCity(response);
    })

  },[])

  const handleChange =(event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };



  const handleSubmit =(event)=>{
    event.preventDefault();
    if (formData.password1 === formData.password2){
      //fetch
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="text-center mt-3">
    <p className="fs-1 fw-bolder">Registro de Proveedores</p> {/* falta corregir estilo de la letra*/}
   	<p className="fs-3 fst-italic">Rellena el formulario para empezar a enviar tus ofertas!</p> {/* falta corregir estilo de la letra*/}
    </div>
    <div className="container bg-warning px-3 py-3 mt-2 mb-5">
   
    <div className="form-floating mb-3">
        <input
          type="company-name"
          className="form-control"
          id="floatingName"
          placeholder="Nombre de la empresa"
          name="Nombre de la empresa"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Nombre de la empresa*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="company-number"
          className="form-control"
          id="floatingNumber"
          placeholder="CIF de la empresa"
          name="CIF de la empresa"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">CIF de la empresa*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="name"
          className="form-control"
          id="floatingName"
          placeholder="Nombre y Apellidos"
          name="Nombre y Apellidos"
          onChange={handleChange}  
        />
        <label htmlFor="floatingName">Nombre y Apellidos de la persona de contacto*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="Direcci??n de correo electr??nico"
          onChange={handleChange}  
        />
        <label htmlFor="floatingInput">Direcci??n de correo electr??nico*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="contrase??a"
          name="password1"
          onChange={handleChange}  
        />
        <a href="#"><i className="far fa-eye"></i> </a>
        <label htmlFor="floatingInput">Contrase??a*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="repeat-password"
          className="form-control"
          id="floatingPassword"
          placeholder="Repetir Contrase??a"
          name="password2"
          onChange={handleChange}  
        />
        <a href="#" ><i className="far fa-eye"></i> </a>
        <label htmlFor="floatingInput">Repetir contrase??a*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="phone-number"
          className="form-control"
          id="floatingNumber"
          placeholder="N??mero de tel??fono"
          name="N??mero de tel??fono"
          onChange={handleChange}  
        />
        <label htmlFor="floatingNumber">N??mero de tel??fono</label>
      </div>
      <select 
      className="form-select mb-3" 
      aria-label="Default select example"
      name="Ciudad"
      onChange={handleChange}
      >
            <option disabled selected>Ciudad(elegir de las indicadas en el desplegable)*</option>
            <option value="??lava/Araba">??lava/Araba</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almer??a">Almer??a</option>
            <option value="Asturias">Asturias</option>
            <option value="??vila">??vila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Baleares">Baleares</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Burgos">Burgos</option>
            <option value="C??ceres">C??ceres</option>
            <option value="C??diz">C??diz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castell??n">Castell??n</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Ciudad Real">Ciudad Real</option>
            <option value="C??rdoba">C??rdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Gerona/Girona">Gerona/Girona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guip??zcoa/Gipuzkoa">Guip??zcoa/Gipuzkoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Ja??n">Ja??n</option>
            <option value="La Coru??a/A Coru??a">La Coru??a/A Coru??a</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Las Palmas">Las Palmas</option>
            <option value="Le??n">Le??n</option>
            <option value="L??rida/Lleida">L??rida/Lleida</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="M??laga">M??laga</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Orense/Ourense">Orense/Ourense</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Tenerife">Tenerife</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
        </select>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
            He le??do y consiento al contenido de la Informaci??n Legal y de Protecci??n de Datos.
        </label>
        </div>
        <div className="col-12 mb-3">
            <button type="submit" className="btn btn-danger">Enviar</button>
        </div>
    </div>
    </form>
    </>
  );
};

export default SupplierRegister;
