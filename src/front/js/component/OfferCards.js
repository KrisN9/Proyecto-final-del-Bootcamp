import React , {useState, useEffect}from "react";


const OfferCards =()=>{
  const [offer, setOffer] = useState([])
  
  useEffect(() => {
    const offer = {
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer '+ localStorage.getItem('token')
      },
    };
    fetch(process.env.BACKEND_URL + "/api/supplier/offer", offer)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOffer(response);
      })

  }, []);
  
  const remove =()=>{
    const remove = {
      method:'DELETE',
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer '+ localStorage.getItem('token')
      },
    };
    fetch(process.env.BACKEND_URL +"/api/delete_offer", remove)
    .then((response)=>{
        return response.json();

    }).then((response)=>{
      console.log(response)
    })
  }

  return (

    <div className="container col-12 col-md-6 mt-4">
      <div className="mt-3"><p className="text-center fst-italic fs-3 text-danger"> Tienes {offer.length} ofertas.</p>
      {
         offer.map((e, index)=>{
               return  <div className="card mb-3" key={index}>
                 <div className="row g-0"> 
                 <div className="col-md-3"><img
                    src={e.url_image}
                    className="img-fluid rounded-start"
                    alt="..."  />
                    </div>
                   
                   <div className="col-md-7">
                    <div className="card-body text-center">
                      <h5 className="card-title fs-3 fw-bolder">{e.company_name}</h5>
                      {/*Nombre de la empresa */}
                      <p className="card-text">{e.title}</p>
                      {/* aqui va la descripcion de la oferta */}
                    </div>
                  </div>
                  <div className="col-md-2 mt-3">
                    <p>Precio:{e.price}€</p>
                    <button type="button" className="btn btn-secondary" onClick={remove}><i className="fas fa-trash-alt"></i></button> 
                  </div> 
                    </div>
                      </div>

            })
        }
        </div> 
    </div>    
  )
}
export default OfferCards;


