import React , {useState, useEffect}from "react";
import User from "./User";
import Cards from "./Cards";
import "../../styles/userarea.css";

const PrivateAreaUser=()=>{

  const [user, setUser]= useState ([]);

  useEffect(()=>{
    
      const optionsUser={
        headers:{
          "Content-Type": "application/json",
          'Authorization':'Bearer '+ localStorage.getItem('token')
        }
        }
      fetch(process.env.BACKEND_URL+ "/api/user" , optionsUser)
      .then((response)=>{
          return response.json()
      }).then ((response)=>{
          setUser(response)
      })
    
  },[])

return (

    <div className="container" id="hotdog">
        <div className="text-center">
          <div className="mt-5 mb-5">
        <p className="fst-italic fs-2">Bienvenid@ a tu area privada, {user.name}</p>
        </div>
  <ul className="nav nav-tabs  justify-content-center"  id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active bg-warning text-black bg-gradient" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cuenta</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link bg-success text-white bg-gradient" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Favorito</button>
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