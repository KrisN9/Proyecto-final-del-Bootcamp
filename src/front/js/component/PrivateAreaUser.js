import React,{useState, useEffect} from "react";
import OfferCards from "./OfferCards";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"; 
import { useContext } from "react";
import { useParams } from "react-router-dom";
import User from "./User";
import Cards from "./Cards";

const PrivateAreaUser=()=>{
  const navigate = useNavigate();
  const {store , actions}= useContext(Context)

  const SessionOut =()=>{
    actions.logOut()
    navigate("/");
  }

return (

    <div className="container">
        <div className="text-center">
         <p className="fst-italic fs-1">Bienvenido a tu area Privada </p>
  <ul className="nav nav-tabs  justify-content-center"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Favorito</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Cerrar Sesión</button>
  </li>
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
     <div>
        <div className="text-md-start mt-3 mb-4 fs-4 fw-semibold">
         <User/>
         
        </div>
     </div>
    </div>
    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <Cards/>
    </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <div>
        <p className="fs-3 mt-4">Espera aún no te vayas!!! Tenemos mas ofertas que mostrarte.</p>
        <button type="button" onClick={SessionOut} className="btn btn-outline-dark mt-5 mb-5"> Cerrar Sesión </button>
    </div>
  </div>
  
</div>


        </div>
    
    </div>
)
   
}

export default  PrivateAreaUser