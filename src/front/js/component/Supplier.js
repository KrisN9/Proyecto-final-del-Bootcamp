import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);

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
    <div
      className=" text-md-start mt-3 mb-4 fs-4 fw-semibold"
      key={supplier.id}
    >
      <ul>
        <li>
          <p className="fst-italic">Nombre: {supplier.name}</p>
        </li>
        <li>
          <p className="fst-italic">Empresa: {supplier.company_name}</p>
        </li>
        <li>
          <p className="fst-italic">Correo Electronico: {supplier.email}</p>
        </li>
        <li>
          <p className="fst-italic">Cif de empresa: {supplier.company_cif}</p>
        </li>
      </ul>
      <div className="gap-2 d-md-flex justify-content-md-end">
        <Link className="btn btn-info" to="/editar-formulario">Editar </Link>
      </div>
    </div>
  );
};

export default Supplier;
