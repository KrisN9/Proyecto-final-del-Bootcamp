import React, {useState, useEffect} from "react"

const EditForm =()=>{

    const [supplier, setSupplier] = useState([]);
    const [input, setInput] = useState({});
   
    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]:input});
      };

  useEffect(() => {
    const optionsSupplier = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/supplier", optionsSupplier)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSupplier(response);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
        const modificar = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
        fetch(process.env.BACKEND_URL + "/api/supplier" + supplier_id, modificar)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(response);
          });
  };

  
 return ( 
    <>
    <form onSubmit={handleSubmit}>
      <div className="container " key={supplier.id}>
        <div className="form-floating mb-2">
        <p className="fs-6">Nombre y Apellidos</p>  
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Nombre y Apellidos"
            name="name"
            onChange={handleChange}
            value={supplier.name}
          />
          {/* <label htmlFor="floatingInput">
           Nombre y apellido
          </label> */}
        </div>
        
        <div className="form-floating mb-2">
        <p className="fs-6">Empresa</p>
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Empresa"
            name="Empresa"
            onChange={handleChange}
            value={supplier.company_name}
          />
          {/* <label htmlFor="floatingName">
            Empresa
          </label> */}
        </div>
       
        <div className="form-floating mb-2">
        <p className="fs-6">Dirección de correo electronico</p>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={supplier.email}
          />
          {/* <label htmlFor="floatingInput">
            Dirección de correo electrónico*
          </label> */}
        </div>
       
        <div className="form-floating mb-2">
        <p className="fs-6">Cif de empresa</p>
          <input
            type="phone-number"
            className="form-control"
            id="floatingNumber"
            placeholder="Cif de empresa"
            name="Cif_empresa"
            onChange={handleChange}
            value={supplier.company_cif}
          />
          {/* <label htmlFor="floatingNumber">Cif de Empresa</label> */}
        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>
            Actualizar
          </button>
        </div>


      </div>
    </form>
  </>
    
    )




}


export default EditForm