import React, { Component }from "react";


export class SupplierEdit extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    const handleSubmit = (event) => {
      event.preventDefault();

    }

  }
}


  return (
    <div className="container">
      <div>
        <label htmlFor="supplier_name">Nombre: </label>
        <input type="supplier_name"
        name="floating_username"
        /* defaultValue={oldSupplier.name} */
        required
        />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_company_name">Empresa: </label>
      <input type="supplier_company_name"
      name="floating_company_name"
      /* defaultValue={oldSupplier.company_name} */
      required
      />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_email">Correo electrónico: </label>
      <input type="supplier_email"
      name="floating_email"
      /* defaultValue={oldSupplier.email} */
      required
      />
      </div>
        <br></br>
      <div>
      <label htmlFor="supplier_company_number">Cif de empresa: </label>
      <input type="supplier_company_number"
      name="floating_number"
      /* defaultValue={oldSupplier.company_cif} */
      required
      />
        <br></br>
      </div>
    </div>
  )
}