import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const LogIn=()=>{
    const [formData, setFormData] = useState({});
    const [shownUser, setShownUser] = useState(false);   //para mostar contraseña
    const [shownSupplier, setShownSupplier] = useState(false);

    const handleChange =(event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
      };
    
    const user = () => {
        setShownUser(!shownUser)
    };
        
    const supplier = () => {
        setShownSupplier(!shownSupplier)
    };
    

    // const handleClick=()=>{   //pendiente de verificar si funciona /// se crea funcion para cuando se de click en el boton se ejecute la buscqueda en FETCH.

    //     const option ={
            
    //         method: 'POST',//  metodo post porq se crea token
	// 		body: JSON.stringify(formData),//   se envia "email" y" constraseña" que se ingresa en el Input. 
	// 		headers: {
	// 		  "Content-Type": "application/json", 

    //                 }
    //             }

    // useEffect(()=>{
    //  fetch(process.env.BACKEND_URL + "/api/login-user", option)   //guardar en una funcion 
    //  .then((response)=>{
       
    //     if(response === formData)  // pendiente de verificar         
    //      return  response.json() ;
       
    //      else return "Error."
    //                                            // aqui se guarda el token
    //      })
    //      .then((response)=>{                   /// se tiene que almacenar el token en localstorage o session storage depende lo que se quiera almacenar 
    //          localStorage.setItem("token", response.token)                                 ///      localStorage : es una pequeña base de datos q se encuentra en los navegadores.
    //         })                                                /// localStrogare.setItem("se guarda con cualquier nombre ", informacion que se quiere guardar"token" )
    //                                                          /// localStrogare.getItem: se utiliza para obtener informacion privada  del usuario con token.
    // })                      
    // }
                                
            

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    
        <form onSubmit={handleSubmit}>
        <div className="container">    {/* pendiente de arreglar la presentación*/}
        <div className="row text-center mb-5 centro"> 
            <div className="col-md-6">
                <p className="fs-1 fst-italic">Iniciar sesión como usuario</p>
                <div className=" col-6 mx-auto">
                  <button className="btn btn-outline-warning " type="button" data-bs-toggle="modal" data-bs-target="#modalUsuario">Iniciar sesión</button>
                  <div className="modal fade" id="modalUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">     {/*modal para usuario*/ }
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fst-italic" id="exampleModalLabel">Usuario</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="form-floating mb-3">
                            <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            />
                            <label for="floatingInput">Dirección de correo electrónico*</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                             type={shownUser ? "text" : "password"}
                             name="contraseña"
                            onChange={handleChange}     
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            /> <a href="#" onClick={user}><i class={shownUser? "far fa-eye-slash" :"far fa-eye"}></i></a>
                            <label for="floatingInput">Contraseña*</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <Link to="/privada-usuario/id"><button type="button" className="btn btn-outline-warning" onClick={handleClick}>Continuar</button></Link>  
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

{/*modal para proveedor*/ }

            <div className="col-md-6">  
            <p className="fs-1 fst-italic" >Iniciar sesión como proveedor</p>
            <div className="col-6 mx-auto">    
            <button className="btn btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalProveedor">Iniciar sesión</button>
            <div className="modal fade" id="modalProveedor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">   
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fst-italic" id="exampleModalLabel">Proveedor</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="form-floating mb-3">
                            <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            />
                            <label for="floatingInput">Dirección de correo electrónico*</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            type={shownSupplier ? 'text' : 'password'}
                            name="contraseña"
                            onChange={handleChange}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            />
                            <a href="#" onClick={supplier}><i class={shownSupplier? "far fa-eye-slash" :"far fa-eye"}></i> </a>
                            <label for="floatingInput">Contraseña*</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <Link to="/privada-proveedor/id">
                        <button type="button" className="btn btn-outline-warning">Continuar</button>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>


                    </div>
            </div>
        </div>
        </div>
        </form>

    )
}

export default LogIn


