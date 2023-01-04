import React from "react";

const Cards =()=>{

    return (

         /* pendiente de revisar si van las cards 
         usar props, useffect */ 
         
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-3">
            <img src="https://www.dominospizza.es/images/2x1alabama_delivery_RESP.jpg" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
            <div className="card-body text-center">
                <h5 className="card-title fs-3 fw-bolder">Dominos Pizza</h5>
                <p className="card-text"> 2x1 En todas las masas y tamaños</p>
            </div>
            </div>
            <div className="col-md-2 mt-3">
                <button type="button" className="btn btn-danger float-end me-3">
                <i className="fas fa-heart"></i>
                </button>
                <button type="button" className="btn btn-warning float-end me-2 mt-2">Pedir!</button>
                </div>
        </div>
        </div>
     


    )

}




export default Cards; 
