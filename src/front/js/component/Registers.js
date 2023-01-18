import React from "react";
import { Link } from "react-router-dom";

const Registers = () => {
  return (
    <div className="container">
      {/* pendiente de arreglar la presentación*/}
      <div className="row text-center mb-5 centro">
        <div className="col-md-6">
          <p className="fs-1 fst-italic">Registrate como usuario</p>
          <div className=" col-6 mx-auto">
            <Link to="/registro-usuario">
              <button className="btn btn-outline-warning" type="button">
                Registrate
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <p className="fs-1 fst-italic">Registrate como proveedor</p>
          <div className="col-6 mx-auto">
            <Link to="/registro-proveedor">
              <button className="btn btn-outline-warning" type="button">
                Registrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registers;
