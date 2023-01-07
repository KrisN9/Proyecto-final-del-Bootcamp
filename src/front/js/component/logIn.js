import React, {useState} from "react";
import { Link } from "react-router-dom";


const LogIn=()=>{

    const [username, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [suppliername, setSuppliername] = useState('')
    const [supplierPassword, setSupplierPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    
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
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            />
                            <label for="floatingInput">Dirección de correo electrónico*</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            type="password"
                            value={userPassword}
                            onChange={e => setUserPassword(e.target.value)}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            /><a href="#"> <i class="far fa-eye"></i> </a>
                            <label for="floatingInput">Contraseña*</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <Link to="/privada-usuario/id"><button type="button" className="btn btn-outline-warning">Continuar</button></Link>  
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
                            value={suppliername}
                            onChange={e => setSuppliername(e.target.value)}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            />
                            <label for="floatingInput">Dirección de correo electrónico*</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            type="password"
                            value={supplierPassword}
                            onChange={e => setSupplierPassword(e.target.value)}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            />
                            <a href="#"> <i class="far fa-eye"></i> </a>
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
        

    )
}


export default LogIn