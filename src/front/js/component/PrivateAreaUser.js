import React from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
import Cards from "./Cards";

const PrivateAreaUser=()=>{


return (

    <div className="container">
        <div className="text-center">
        <p className="fst-italic fs-2">Bienvenido a tu area Privada </p>
  <ul className="nav nav-tabs  justify-content-center"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Favorito</button>
  </li>
  
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
     <div>
        <div className="container col-md-8 text-md-start mt-5 mb-5 fs-4 fw-semibold">
         <User/>
         
        </div>
     </div>
    </div>
    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <Cards/>
    </div>
</div>
        </div>
    </div>
)
   
}

export default  PrivateAreaUser


// const navigate = useNavigate();
  // // const {store , actions}= useContext(Context)

  // // const SessionOut =()=>{
  // //   actions.logOut()
  // //   navigate("/");
  // // }