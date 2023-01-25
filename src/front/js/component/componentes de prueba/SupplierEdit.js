import React ,{ useState, useEffect, useContext }from "react";


const SupplierEdit = () => {
  const {store, actions} = useContext(Context);
  const [currentSupplier, setCurrentSupplier] = useState({});
  const [oldSupplier, setOldSupplier] = useState({});

  return (
    <div className="container">
      <input type="supplier_name" onChange={(e) => {
        setCurrentSupplier({...supplier, name: e.target.value});
      }}
      name="floating_username"
      defaultValue={oldSupplier.name}
      required
      />
      <label htmlFor="supplier_name">Nombre:</label>

      <input type="supplier_company_name" onChange={(e) => {
        setCurrentSupplier({...supplier, company_name: e.target.value});
      }}
      name="floating_company_name"
      defaultValue={oldSupplier.company_name}
      required
      />
      <label htmlFor="supplier_company_name">Empresa:</label>

      <input type="supplier_email" onChange={(e) => {
        setCurrentSupplier({...supplier, email: e.target.value});
      }}
      name="floating_email"
      defaultValue={oldSupplier.email}
      required
      />
      <label htmlFor="supplier_email">Correo electrónico:</label>

      <input type="supplier_company_number" onChange={(e) => {
        setCurrentSupplier({...supplier, company_cif: e.target.value});
      }}
      name="floating_number"
      defaultValue={oldSupplier.company_cif}
      required
      />
      <label htmlFor="supplier_company_number">Cif de empresa:</label>
    </div>
  )

}

export default SupplierEdit;