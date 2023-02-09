import React from "react";
import { Link } from "react-router-dom";
import "../../styles/register.css";

const Registers = () => {
  return (
    <div className="container-fluid" id="fast-food">
      {/* pendiente de arreglar la presentación*/}
      <div className="row text-center mb-3 mt-3">
        <div className="col-md-6 col-sm-6 mt-5 mb-5">
          <p className="fs-1 font-change mt-5">Regístrate como usuario</p>
          <div className=" col-6 mx-auto mb-5">
            <Link to="/registro-usuario">
              <button className="btn btn-danger btn-lg mb-5" type="button">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 mt-5 mb-5">
          <p className="fs-1 font-change mt-5">Regístrate como proveedor</p>
          <div className="col-6 mx-auto mb-5">
            <Link to="/registro-proveedor">
              <button className="btn btn-danger btn-lg mb-5" type="button">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registers;
