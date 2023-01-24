import React ,{ useState, useEffect }from "react";
import { useNavigate,useParams} from 'react-router-dom';
import { Container } from "react-bootstrap";
import axios from "axios";

function UserEdit()
{ 
const [useredit, setUseredit]= useState({user_name:'', user_email:'', user_phone:''});
const [msg, setMsg]= useState('');
const navigate = useNavigate();
const {id} = useParams();

useEffect( ()=>{
  const edituserid = async()=>{
      const reqdata= await fetch(process.env.BACKEND_URL + `/${id}`);
      const res = await reqdata.json();
      setUseredit(await res);
  }
  edituserid();
},[]);


const handleEdit =(e)=>{
    setUseredit({...useredit, [e.target.name]:e.target.value});  

}

const handleUserupdate= async (e)=>{
    e.preventDefault();
    const response= await axios.post(process.env.BACKEND_URL + `/${id}`, useredit);
    setMsg(response.data.msg);
    
/*     setTimeout( ()=>{
        history.push("/user");
    }, 2000); */





}

    return(
        <React.Fragment>
           <Container className="content">
           <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              Modificación de datos de cuenta 
            </h2>
               <p className="text-danger"> { msg }</p>
            <form onSubmit={ handleUserupdate } className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  value={useredit.user_name}
                  onChange={(e)=>handleEdit(e)}
                
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="text"
                  name="user_email"
                  className="form-control p-2"
                  value={useredit.user_email}
                  onChange={(e)=>handleEdit(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  name="user_phone"
                  className="form-control p-2"
                  value={useredit.user_phone}
                  onChange={(e)=>handleEdit(e)}
                />
              </div>

              <div className="col-md-3">
                <button type="submit" className="btn btn-primary mt-4">
                  Modificar datos
                </button>
              </div>
            </form>

            </div>
            </div>
           </Container>
        </React.Fragment>
    );
}
export default UserEdit;
