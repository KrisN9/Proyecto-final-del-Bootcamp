import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Supplier =()=>{

    const [supplier , setSupplier]=useState([])
    const params= useParams()

    useEffect(()=>{
    fetch(`process.env.BACKEND_URL +/supplier/${params.id}`)
    .then((response)=>{
        return response.json()
    }).then ((response)=>{
        setSupplier(response)
    })

    }, [])
   
return (

    <div className="text-md-start mt-3 mb-4 fs-4 fw-semibold">
            {   
            supplier.map((e)=>{
            <ul>
             <li>Nombre:{e.name}</li>
             <li>Empresa:{e.company_name}</li>
             <li>Correo Electronico:{e.name}</li>
             <li>Cif de empresa:{e.email}</li>
             <li>Telefono:{e.telephone_number}</li>
            </ul>
            })
            }
              </div>

)
        
    

}

export default Supplier