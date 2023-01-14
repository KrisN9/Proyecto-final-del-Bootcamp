import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const LogIn=()=>{
    const [formData, setFormData] = useState({});
    const [userShown, setUserShown] = useState(false);   //para mostar contraseña
    const [supplierShown, setSupplierShown] = useState(false);
    const [user , setUser]=useState({});

    const handleChange =(event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
      };
    
    const shownUser = () => {
        setUserShown(!userShown)
    };
        
    const shownSupplier = () => {
        setSupplierShown(!supplierShown)
    };
            
       
            const option ={
            
            method: 'POST',
			body: JSON.stringify(formData),
			headers: {
			  "Content-Type": "application/json", 

                    }
                }

    useEffect(()=>{
     fetch(process.env.BACKEND_URL + "/api/login-user", option)   //guardar en una funcion 
     .then((response)=>{
        response.json() 
     }).then((response)=>{
        console.log(response)
     })
   
    })

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
                             type={userShown ? "text" : "password"}
                             name="contraseña"
                            onChange={handleChange}     
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            /> <a href="#" onClick={shownUser}><i class={userShown? "far fa-eye-slash" :"far fa-eye"}></i></a>
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
                            type={supplierShown ? 'text' : 'password'}
                            name="contraseña"
                            onChange={handleChange}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="contraseña"
                            />
                            <a href="#" onClick={shownSupplier}><i class={supplierShown? "far fa-eye-slash" :"far fa-eye"}></i> </a>
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


