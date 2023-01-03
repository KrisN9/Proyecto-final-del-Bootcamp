import React from "react";

const PrivateAreaUser=()=>{
const isLogged = false;
return (


    <div className="container">

        area privada de usuarios
        {
            isLogged ? <Link to='/logout'>Cerrar sesión</Link>
            : <Link to='/inicio-sesion'>Iniciar sesión</Link>
        }
    </div>
)
   



}

export default  PrivateAreaUser