import React, { useState ,useEffect } from "react";
import Offer from "./Offer";
import OfferCards from "./OfferCards";
import Supplier from "./Supplier";
import "../../styles/supplierarea.css";




const PrivateAreaSupplier=()=>{
  const [supplier , setSupplier] = useState([]);
 

  useEffect(()=>{
    const optionsSupplier = {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer '+ localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/supplier", optionsSupplier)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSupplier(response);
      });
  }, [])

return (
    <div className="container-fluid" id="hamburger">
        <div className="text-center">
          <div className="mt-3 mb-3">
        <p className="font-change fs-1">Bienvenid@ a tu area privada, {supplier.name}</p>
        </div>
  <ul className="nav nav-tabs justify-content-center border-1 border-dark"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active bg-success text-black bg-gradient" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link bg-warning text-black bg-gradient" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Tus Ofertas</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link bg-danger text-white bg-gradient" id="offer" data-bs-toggle="tab" data-bs-target="#offer-pane" type="button" role="tab" aria-controls="offer-pane" aria-selected="false">Añadir Ofertas</button>
  </li>
  
  
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <div className="container col-md-8 text-md-start mt-3 mb-3 fs-4 fw-semibold">
       <Supplier/>
  </div>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    
    <OfferCards/>  
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

 // const navigate = useNavigate();
  // // const {store , actions}= useContext(Context)

  // //         const SessionOut =()=>{
  // //           actions.logOut()
  // //           navigate("/");
  // //         }