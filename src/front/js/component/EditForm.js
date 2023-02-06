import React, { useState, useEffect } from "react";

const EditForm = () => {
  const [supplier, setSupplier] = useState([]);
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]:event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  useEffect(() => {
    const optionsSupplier = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/supplier", optionsSupplier)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSupplier(response);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container ">
      <div className="mt-2"> 
          <p className="fs-6 text-success">Nombre y Apellidos</p>
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Nombre y Apellidos"
            name="name"
            onChange={handleChange}
            defaultValue={supplier.name}
          />
         
        </div>
         <div className="mt-2">
          <p className="fs-6 text-success">Empresa</p>
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Empresa"
            name="Empresa"
            onChange={handleChange}
            defaultValue={supplier.company_name}
          />
        </div>
            <div className="mt-2">
          <p className="fs-6 text-success">Dirección de correo electronico</p>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            defaultValue={supplier.email}
          />
       </div>
       <div className="mt-2" >
          <p className="fs-6 text-success">Cif de empresa</p>
          <input 
            type="phone-number"
            className="form-control"
            id="floatingNumber"
            placeholder="Cif de empresa"
            name="Cif_empresa"
            onChange={handleChange}
            defaultValue={supplier.company_cif}
          />
          </div>
      </div>
    </form>
  );
};
export default EditForm;
