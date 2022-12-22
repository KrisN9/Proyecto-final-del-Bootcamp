import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg navbar-dark text-dark">
			  <div className="container">

   				<Link to="/">
					<span className="navbar-brand mb-0 h1">
					<img src="https://www.barrabes.com/images/home/logo_flash.png?v=2" alt="Logo" width="100" height="50" className="d-inline-block align-text-top"/>
					</span>
				</Link>
    	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	  <span className="navbar-toggler-icon"></span>  
    	</button>
		<div className="collapse navbar-collapse gap-2 justify-content-md-end" id="navbarSupportedContent">
			
			<button type="button" className="btn btn-outline-success rounded-pill">Favorito</button>
			<button type="button" className="btn btn-outline-success rounded-pill">Registrarse</button>
	 		<button type="button" className="btn btn-outline-success rounded-pill">Iniciar sesión</button>
			
	
		</div>
  </div>
</nav>
		
	);
};
