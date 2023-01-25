import React, {useState, useEffect} from "react";

const Supplier =()=>{

    const [supplier , setSupplier]=useState([])

    useEffect(()=>{
      const optionsSupplier={
      headers:{
        "Content-Type": "application/json",
        'Authorization':'Bearer '+ localStorage.getItem('token')
      }
      }
    fetch(process.env.BACKEND_URL+ "/api/supplier" , optionsSupplier)
    .then((response)=>{
        return response.json()
    }).then ((response)=>{
        setSupplier(response)
    })
    },[])

    
   
return (

    <div className="text-md-start mt-3 mb-4 fs-4 fw-semibold">
            
            <ul>
             <li><p className="fst-italic">Nombre: {supplier.name}</p></li>
             <li><p className="fst-italic">Empresa: {supplier.company_name}</p></li>
             <li><p className="fst-italic">Correo Electronico: {supplier.email}</p></li>
             <li><p className="fst-italic">Cif de empresa: {supplier.company_cif}</p></li>
            </ul>
              </div>

)
        
    

}

export default Supplier