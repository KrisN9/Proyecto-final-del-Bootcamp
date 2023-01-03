import React from "react";
import { Link } from "react-router-dom";


const LogIn=()=>{

    return (
    
        <div className="container">{/* pendiente de arreglar la presentación*/}
        <div className="row text-center mb-5 centro">
            <div className="col-md-6">
                <p className="fs-1 fst-italic">Iniciar sesión como usuario</p>
                <div className=" col-6 mx-auto">
                   <Link to=""><button className="btn btn-outline-success" type="button">Iniciar sesión</button></Link> 
                    </div>
                </div>
            <div className="col-md-6">  
            <p className="fs-1 fst-italic" >Iniciar sesión como proveedor</p>
            <div className="col-6 mx-auto">
                  <Link to=""><button className="btn btn-outline-success" type="button">Iniciar sesión</button></Link>  
                    </div>
            </div>
        </div>
        </div>
        

    )
}


export default LogIn