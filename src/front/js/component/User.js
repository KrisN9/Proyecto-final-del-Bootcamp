import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const User =()=>{

    const [user, setUser]=useState([])

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

    <div className="text-md-start mt-3 mb-4 fs-4 fw-semibold">
           
                <ul>
                <li><p className="fst-italic">Nombre: {user.name}</p></li>
                <li><p className="fst-italic">Correo Electronico:{user.email}</p></li>
                </ul>
              </div>
)

}

export default User
