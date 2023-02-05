import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
    const {store , actions}= useContext(Context)

          const SessionOut =()=>{
            actions.logOut()
            navigate("/");
          }
  

		  return (
					
			<nav className="navbar navbar-expand-lg navbar-dark text-dark">
				  <div className="container ">
	
					   <Link to="/">
						<span className="navbar-brand mb-0 h1">
						<img src="https://i.postimg.cc/KYLQqTks/Promo-Food-1.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top rounded-circle"/>
						</span>
					</Link>
					
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>  
					</button>
					<div className="collapse navbar-collapse gap-2 justify-content-md-end" id="navbarSupportedContent"> 
					
					{localStorage.getItem('token') ? <> 
					<Link  to={ localStorage.getItem("type")== "user" ?"/area-privada-usuario" : "/area-privada-proveedor"}> 
					   
					</Link>
					  <Link className="btn btn-outline-success rounded-pill" to="/area-privada-usuario">Área privada</Link>   {/* Terminar de implantar para user/supplier, y que solo aparezca en la Home */}
					  <Link className="btn btn-outline-success rounded-pill" to="/" onClick={SessionOut}>Cerrar sesión</Link>
					</> 
					 :<>
					<Link className="btn btn-outline-success rounded-pill " to="/registro"> 
					   Registrarse
					</Link>
					   <Link className="btn btn-outline-success rounded-pill " to="/inicio-sesion">
					   Iniciar sesión
					   </Link> 
					   </>
						  }
						  
					  </div>
					</div>
					</nav>
							
		);
	};
	