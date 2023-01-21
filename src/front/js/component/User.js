import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const User =()=>{

    const [user , setUser]=useState([])
    const params= useParams()

    useEffect(()=>{
    fetch(`process.env.BACKEND_URL +/user/${params.id}`)
    .then((response)=>{
        return response.json()
    }).then ((response)=>{
        setUser(response)
    })

    }, [])
   
return (

    <div className="text-md-start mt-3 mb-4 fs-4 fw-semibold">
            {   
            user.map((e)=>{
                <ul>
                <li>Nombre:{e.name}</li>
                <li>Correo Electronico:{e.name}</li>
                <li>Telefono:{e.telephone_number}</li>
                </ul>
            })
            }
              </div>

)
        
    

}

export default User
