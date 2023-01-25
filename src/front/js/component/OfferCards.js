import React from "react";


const OfferCards =()=>{
    const [offer, setOffer] = useState([]);
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
  
    return (
      <div className="container col-12 col-md-6 mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body text-center">
                <h5 className="card-title fs-3 fw-bolder">dominos </h5>{" "}
                {/*Nombre de la empresa */}
                <p className="card-text">2x1</p>{" "}
                {/* aqui va la descripcion de la oferta */}
              </div>
            </div>
            <div className="col-md-2 mt-3">
              <p>Price:10€</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default OfferCards;
  