import React, { useState, useEffect } from "react";
import "../../styles/supplierarea.css";
import EditForm from "./EditForm";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const [input, setInput] = useState({});

  const handleChange = (event) => {

    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
      getToUpdate()
  }, []);

  const getToUpdate=()=>{

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
  }


    const toUpDate =(supplier_id)=>{
        const modificar = {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(input),
        };
           fetch(process.env.BACKEND_URL + "/api/supplier/" + supplier_id, modificar)
            .then((response) => {
            return response.json();
            })
            .then((response) => {
              getToUpdate()
            
            });

          }
  return (
    <div
      className=" text-md-start mt-3 mb-3 fs-3 fw-bold" >
       
      <ul>
        <li>
          <p className="font-change">Nombre: {supplier.name} </p>
        </li>
        <li>
          <p className="font-change">Correo Electronico: {supplier.email}</p>
        </li>
        <li>
          <p className="font-change">Empresa: {supplier.company_name}</p>
        </li>
       
        <li>
          <p className="font-change">Cif de empresa: {supplier.company_cif}</p>
        </li>
        <li>
          <p className="font-change">Número de teléfono:{supplier.telephone_number}</p>
        </li>
      </ul>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" >  
      <button  type="button" className="btn btn-secondary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Modificar datos de la cuenta:  <i className="fas fa-edit"></i>
      </button>
      </div>
      
      <div className="modal fade col-md-8" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title font-change text-danger fs-5 text-center" id="staticBackdropLabel">Modifica tus datos</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
            defaultValue={supplier.name}
          />
         
        </div>
         <div className="mt-2">
          <p className="fs-6 font-change">Empresa</p>
          <input
            type="Empresa"
            className="form-control"
            id="floatingEmpresa"
            placeholder="Empresa"
            name="company_name"
            onChange={handleChange}
            defaultValue={supplier.company_name}
          />
        </div>
            <div className="mt-2">
          <p className="fs-6 font-change ">Dirección de correo electronico</p>
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            defaultValue={supplier.email}
          />
       </div>
       <div className="mt-2" >
          <p className="fs-6 font-change ">Cif de empresa</p>
          <input 
            type="Cif_empresa"
            className="form-control"
            id="floatingCifEmpresa"
            placeholder="Cif de empresa"
            name="company_cif"
            onChange={handleChange}
            defaultValue={supplier.company_cif}
          />
          </div>
          <div className="mt-2" >
          <p className="fs-6 font-change ">Número de teléfono</p>
          <input 
            type="Cif_empresa"
            className="form-control"
            id="floatingCifEmpresa"
            placeholder="Cif de empresa"
            name="telephone_number"
            onChange={handleChange}
            defaultValue={supplier.telephone_number}
          />
          </div>

      </div>
    </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>toUpDate(supplier.id)} >Actualizar</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Supplier;
