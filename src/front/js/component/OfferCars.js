import React from "react";



const OfferCards =()=>{
        return (
            <div className="container col-12 col-md-6 mt-4">
            <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-3">
            <img src="https://www.dominospizza.es/images/2x1alabama_delivery_RESP.jpg" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
            <div className="card-body text-center">
                <h5 className="card-title fs-3 fw-bolder">Dominos Pizza</h5> {/*Nombre de la empresa */}
                <p className="card-text"> 2x1 En todas las masas y tamaños</p> {/* aqui va la descripcion de la oferta */}
            </div>
            </div>
            <div className="col-md-2 mt-3">
                <p>Price: €</p>
            </div>
            </div>
            </div>
            </div>

        )

}

export default OfferCards;