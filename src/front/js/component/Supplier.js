import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const [edit, setEdit]= useState([]);

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


    const editar =(supplier_id)=>{
        const modificar = {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(),
        };
           fetch(process.env.BACKEND_URL + "/api/supplier/"+supplier_id, modificar)
            .then((response) => {
            return response.json();
            })
            .then((response) => {
            setEdit(response);
            });

          }
  return (
    <div
      className=" text-md-start mt-3 mb-4 fs-4 fw-semibold"
      
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
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" >  
      <button  type="button" className="btn btn-info " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Editar
      </button>
      </div>
     
      <div className="modal fade col-md-8" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modifica tus datos</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <EditForm/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={()=>editar(supplier.id)} >Actualizar</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Supplier;
