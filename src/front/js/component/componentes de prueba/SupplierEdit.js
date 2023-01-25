import React ,{ useState, useEffect, useContext }from "react";


const SupplierEdit = () => {
  const [changeData, setChangeData] = useState({});

  const handleChange = (event) => {
    setChangeData({...changeData, [event.target.name]: event.target.value});
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="supplier_name">Nombre: </label>
        <input type="supplier_name" onChange={handleChange}
        name="floating_username"
        defaultValue={oldSupplier.name}
        required
        />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_company_name">Empresa: </label>
      <input type="supplier_company_name" onChange={handleChange}
      name="floating_company_name"
      defaultValue={oldSupplier.company_name}
      required
      />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_email">Correo electrónico: </label>
      <input type="supplier_email" onChange={handleChange}
      name="floating_email"
      defaultValue={oldSupplier.email}
      required
      />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_company_number">Cif de empresa: </label>
      <input type="supplier_company_number" onChange={handleChange}
      name="floating_number"
      defaultValue={oldSupplier.company_cif}
      required
      />
        <br></br>
      </div>
    </div>
  )

}

export default SupplierEdit;