import React,{useState, useEffect} from "react";
import Offer from "./Offer";
import { Context } from "../store/appContext"; 
import { useContext } from "react";
import OfferCards from "./OfferCards";
import Supplier from "./Supplier";
import { useNavigate } from "react-router-dom";


const PrivateAreaSupplier=()=>{
  const navigate = useNavigate();
  const {store , actions}= useContext(Context)

          const SessionOut =()=>{
            actions.logOut()
            navigate("/");
          }

return (
    <div className="container mt-3">
        <div className="text-center">
         <p className="fst-italic fs-3">Bienvenido a tu area Privada </p>
  <ul className="nav nav-tabs  justify-content-center"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Tus Ofertas</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="offer" data-bs-toggle="tab" data-bs-target="#offer-pane" type="button" role="tab" aria-controls="offer-pane" aria-selected="false">Añadir Ofertas</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Cerrar Sesión</button>
  </li>
  
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

  <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Puedes modificar los detalles de tu cuenta aquí
  </button>
  {/* pendiente saber donde movemos el botón del modal */}

  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modificar datos de cuenta</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-outline-warning">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
       <Supplier/>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <div className="mt-3">
    <p className="text-center fst-italic fs-3 text-danger">Aquí tienes todas tus ofertas</p>
    <OfferCards /> 
    </div>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <div>
    <p className="fs-3 mt-4">Estás seguro de que te quieres ir ? </p>
     <button type="button" onClick={SessionOut} className="btn btn-outline-dark mt-5 mb-5"> Cerrar Sesión </button>
    </div>
  </div>

  <div className="tab-pane fade" id="offer-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <div>
       <Offer/>
    </div>
  </div>
</div>
        </div>
    </div>

)
   
}

export default  PrivateAreaSupplier

