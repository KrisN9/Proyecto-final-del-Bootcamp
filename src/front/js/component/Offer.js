import React from "react";
import { useState } from "react";

const Offer= ()=>{ 
        const [formData, setFormData] = useState({});
        
        const handleChange =(event) => {
          setFormData({...formData, [event.target.name]: event.target.value });
        };
        const handleSubmit =(event)=>{
          event.preventDefault();   
         
        }
        
        const handleClick =()=>{
            fetch(process.env.BACKEND_URL + "/api/offer" ,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                }
              )
              .then((response) => {
                if (response.status === 200) return response.json();

              })
                
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => alert(error));
            }
    
 
 return (
        <form onSubmit={handleSubmit}>
            <div className="text-center">
                <p className="fs-1 fw-bolder">Añade tu oferta</p>
            </div>
            <div className="container bg-warning px-3 py-3 mt-2 mb-5 col-12 col-md-8">
            <div className="form-floating mb-3">
                <input
                    type="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Nombre de la empresa "
                    name="Nombre de la empresa "
                    onChange={handleChange}
                    
                />
                <label htmlFor="floatingName">Nombre de la empresa </label>
                </div>
                <div className="form-floating mb-3">
                <input
                    type="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Nombre del proveedor "
                    name="Nombre del proveedor "
                    onChange={handleChange}
                    
                />
                <label htmlFor="floatingName">Nombre del proveedor </label>
                </div>
                <div className="form-floating mb-3">
                <input
                    type="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Descripción de la oferta "
                    name="Descripción de la oferta"
                    onChange={handleChange}
                    
                />
                <label htmlFor="floatingName">Descripción de la oferta</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    type="phone-number"
                    className="form-control"
                    id="floatingNumber"
                    placeholder="Precio de oferta"
                    name="Precio de  Oferta"
                    onChange={handleChange}
                />
                <label htmlFor="floatingNumber">Precio de oferta</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    type="url"
                    className="form-control"
                    id="floatingNumber"
                    placeholder="Añadir imagen"
                    name="Tipo de Oferta"
                    onChange={handleChange}
                />
                <label htmlFor="floatingNumber">Añadir imagen </label>
                </div>
                
                <div className="form-floating mb-3">
                <input
                    type="url"
                    className="form-control"
                    id="floatingNumber"
                    placeholder="Añadir enlace Web"
                    name="Añadir enlace Web"
                    onChange={handleChange}
                />
                <label htmlFor="floatingNumber">Añadir enlace Web</label>
                </div>
               
                <div className="col-12 mb-3">
                <button type="submit" className="btn btn-danger" onClick={handleClick}>
                    Enviar
                </button>
                </div>
                
            </div>
            </form>
            
 )


}


export default Offer;