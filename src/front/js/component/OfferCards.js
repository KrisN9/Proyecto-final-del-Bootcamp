import React from "react";


const OfferCards =(props)=>{
    return (
        
        <div className="container col-12 col-md-6 mt-4"> 
             <div className="card mb-3">
                        <div className="row g-0">
                     <div className="col-md-3">
                     <img src={props.url_image}className="img-fluid rounded-start" alt="..."/>
                     </div>
                     <div className="col-md-7">
                     <div className="card-body text-center">
                         <h5 className="card-title fs-3 fw-bolder">{props.company_name}</h5> {/*Nombre de la empresa */}
                         <p className="card-text">{props.title}</p> {/* aqui va la descripcion de la oferta */}
                     </div>
                     </div>
                     <div className="col-md-2 mt-3">
                         <p>Price:{props.price}€</p>
                     </div>
                     </div>
                     </div>
                
        
        </div>

    )

}
export default OfferCards;