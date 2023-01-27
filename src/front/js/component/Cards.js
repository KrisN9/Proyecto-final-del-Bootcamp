import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";

const Cards = () => {
  const [favorite, setFavorite] = useState([])
  
  useEffect(() => {
    const optionFavorite = {
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer '+ localStorage.getItem('token')
      },
    };
    fetch(process.env.BACKEND_URL + "/api/user/favorite", optionFavorite)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFavorite(response);
      })

  }, []);
  
  return (
   
    <div className="container col-12 col-md-6 mt-4"> 
        { favorite.map ((e)=>{
           return <div className="card mb-3">
                  <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={e.url_image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body text-center">
                    <h5 className="card-title fs-3 fw-bolder">{e.company_name}</h5>
                    <p className="card-text"> {e.title}</p>
                  </div>
                </div>
                <div className="col-md-2 mt-2">
                <p>Precio:{e.price}€</p>
                  <a href={e.url} target="_blanck" type="button" className="btn btn-warning float-end me-2 " >
                    Pedir!
                  </a>
                  <button type="button" className="btn btn-outline-secondary mt-2 mb-2" >
                    <i className="fas fa-trash-alt"></i>
                    </button> 
                </div>
              </div>
            </div>


        })}
    
    </div>
  );
};

export default Cards;


{/* <button type="button" className="btn btn-danger float-end me-3">
                    <i className="fas fa-heart"></i>
                  </button> */}