import React, {useState, useEffect} from "react"

const EditForm =()=>{

    const [supplier, setSupplier] = useState([]);
    const [value, setValue] = useState({});
   
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]:value});
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

  };

 return ( 
    <>
    <form onSubmit={handleSubmit}>
      <div className="text-center mt-3 ">
        <p className="fs-1 fw-bolder">Editar Datos</p>
      </div>
      <div className="container bg-warning col-md-6 px-3 py-3 mt-2 mb-5">
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Nombre y Apellidos"
            name="name"
            onChange={handleChange}
            required
            value={supplier.name}
          />
          <label htmlFor="floatingName">
            Nombre y Apellidos
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="Empresa"
            name="Empresa"
            onChange={handleChange}
            required
            value={supplier.company_name}
          />
          <label htmlFor="floatingName">
            Empresa
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            required
            value={supplier.email}
          />
          <label htmlFor="floatingInput">
            Dirección de correo electrónico*
          </label>
        </div>
       
        <div className="form-floating mb-3">
          <input
            type="phone-number"
            className="form-control"
            id="floatingNumber"
            placeholder="Cif de empresa"
            name="Cif_empresa"
            onChange={handleChange}
            value={supplier.company_cif}
          />
          <label htmlFor="floatingNumber">Cif de Empresa</label>
        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>
            Enviar
          </button>
        </div>


      </div>
    </form>
  </>
    
    )




}


export default EditForm