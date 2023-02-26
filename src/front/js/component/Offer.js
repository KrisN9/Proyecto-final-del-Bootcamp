import React from "react";
import { useState, useEffect, useRef } from "react";
import "../../styles/supplierarea.css";
import Swal from "sweetalert2";
import { Cloudinary } from "@cloudinary/url-gen";

const Offer = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "ddkqnzbrg",
        uploadPreset: "PromoFood",
      },
      function (error, result) {
        console.log(result);
        if (!error && result && result.event === "success") {
          console.log("Informacion de la imagen : ", result.info);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        widget_cloudinary.open();
      },
      false
    );
  }, []);

  const [formData, setFormData] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
 

  const handleClick = (event) => {
    fetch(process.env.BACKEND_URL + "/api/offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ formData }),
    })
      .then((response) => {
        if (response.status == 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "¡Oferta creada!",
            text: "Se ha creado con exito",
          });
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "¡Algo ha salido mal, inténtalo de nuevo!",
          });
        }
        response.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mt-5 mb-5">
        <p className="fs-1 font-change">
          Rellena este formulario para añadir tu oferta
        </p>
      </div>
      <div className="container bg-danger px-3 py-3 mb-3 col-12 col-md-6">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Nombre de la empresa "
            name="company_name"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingName">Nombre de la empresa*</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Descripción de la oferta "
            name="title"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingTitle">Descripción de la oferta*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="price"
            className="form-control"
            id="floatingPrice"
            placeholder="Precio de oferta"
            name="price"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingPrice">Precio de oferta*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="floatingUrl"
            placeholder="url"
            name="url"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingPrice">Dirección página web*</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="location"
            className="form-control"
            id="floatingLocation"
            placeholder="location"
            name="location"
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingLocation">Ubicación*</label>
        </div>

        {/* <div className="mb-3 text-start">
          <label htmlFor="formFile" className="form-label">
            Añadir imagen
          </label>
          <input className="form-control" type="file"  />
        </div> */}
        <div className="col-md-4  mt-3">
          <button onClick={() => widgetRef.current.open()} id="upload_widget">
            Examinar...
          </button>
          <img id="uploadedimage" name="url_image" src="" ></img>
        </div>
        <div className="col-12">
          <button
            type="reset"
            className="btn btn-warning"
            onClick={handleClick}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Offer;

// <div className="mb-3 text-start">
// <label htmlFor="floatingUrl" className="form-label">Añadir url de empresa </label>
// <input className="form-control form-control-sm"
//  id="floatingUrl"
//  name="url"
//  type="file"
//  onChange={handleChange}/>
// </div>

// <div className="col-md-4  mt-3"><button onClick={()=> widgetRef.current.open()} id="upload_widget">
//           Examinar...
//       </button></div>

// fetch("https://api.cloudinary.com/v1_1/ddkqnzbrg/image/upload", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
//   body: JSON.stringify(formData),
// });

{
  /* <img id="img"/> */
}

// useEffect(() => {
//   cloudinaryRef.current = window.cloudinary;
//   widgetRef.current = cloudinaryRef.current.createUploadWidget(
//     {
//       cloudName: "ddkqnzbrg",
//       uploadPreset: "PromoFood",
//     },
//     function (error, result) {
//       if (!error && result && result.event === "success") {
//         imageRef.src = result.info.secure_url;
//       }
//     }
//   );
// }, []);

// const cloudinaryRef = useRef();
// const widgetRef = useRef();
// let imageRef = "#floatingImage";

// const archivo = document.getElementById("floatingImage").files;
//     const reader = new FileReader();
//     if (floatingImage) {
//       reader.readAsDataURL(archivo);
//       reader.onloadend = function () {
//         document.getElementById("img").src = reader.result;
//       };
//     }

// const myWidget = cloudinary.createUploadWidget({

//   cloudName: cloudName,
//   uploadPreset: uploadPreset,

// },(error, result) => {
//   if (!error && result && result.event === "success") {
//     console.log("Done! Here is the image info: ", result.info);
//     document
//       .getElementById("uploadedimage")
//       .setAttribute("src", result.info.secure_url);
//   }
// }

// );
// document.getElementById("upload_widget").addEventListener(
// "click",
// function () {
//   myWidget.open();
// },
// false
// );
// fetch("https://api.cloudinary.com/v1_1/ddkqnzbrg/upload", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// })
//   .then((resp) => resp.json())
//   .then((data) =>
//   setImage(data.secure_url));
