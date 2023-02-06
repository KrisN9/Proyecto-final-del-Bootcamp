import React, {useState} from "react";

const Modals = (props) => {

    const [input, setInput] = useState({});
 

    const handleChange = (event) => {
      setInput({ ...input, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const modificar = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({input, id:event }),
      };
      fetch(process.env.BACKEND_URL + "/api/offer/" + props.idModals, modificar)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response)
          
        });
    };
  
  return ( <><div className="modal fade" id={props.idModals} tabindex="-1"  aria-labelledby={props.idModalLabel} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id={props.idModalLabel}>Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit}>
              <div className="container ">
                <div className="mt-2">
                  <p className="fs-6 text-success">title </p>
                  <input
                    type="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="title"
                    name="title"
                    onChange={handleChange}
                    defaultValue={props.title}
                  />
                </div>
                <div className=" mt-2">
                  <p className="fs-6 text-success">Precio </p>
                  <input
                    type="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Precio"
                    name="price"
                    onChange={handleChange}
                    defaultValue={props.price}
                  />
                </div>
              </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

   </>
  );
};

export default Modals;