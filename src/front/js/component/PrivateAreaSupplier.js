import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Offer from "./Offer";
import OfferCards from "./OfferCards";
import Supplier from "./Supplier";

const PrivateAreaSupplier=()=>{
  const params= useParams()
  
  const [offer, setOffer]=useState([])

    useEffect(()=>{    
      fetch(`process.env.BACKEND_URL + /api/supplier/offer/${params.id}`)
        .then(response => response.json())
        .then(response =>{
            setOffer(response)
        })
    }, [])

return (
    <div className="container mt-3">
        <div className="text-center">
         <p className="fst-italic fs-3">Bienvenido a tu area Privada ..name... </p>
  <ul className="nav nav-tabs  justify-content-center"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Tus Ofertas</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="offer" data-bs-toggle="tab" data-bs-target="#offer-pane" type="button" role="tab" aria-controls="offer-pane" aria-selected="false">Añadir Ofertas</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Cerrar Sesión</button>
  </li>
  
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
       <Supplier/>
    </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <div className="mt-3">
    <p className="text-center fst-italic fs-3 text-danger">Aquí tienes todas tus ofertas: .....Numero de ofertas... .</p>
    {
        offer.map((e)=>{
          return <OfferCards image={e.url_image} 
                        title={e.title} 
                        price={e.price} 
                        name={e.name}
                        id={e.id} 
                        /> 

        })
      } 
    </div>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <div>
    <p className="fs-3 mt-4">Estás seguro de que te quieres ir ? </p>
     <button type="button" class="btn btn-outline-dark mt-5 mb-5"> Cerrar Sesión </button>
    </div>
  </div>

  <div class="tab-pane fade" id="offer-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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

