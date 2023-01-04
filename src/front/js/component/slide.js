import React from "react";

{/*pendiente de revisar como usar los slide
se puede usar Props?*/}

const Slide=()=>{

    return (

        <div id="carouselExampleFade" className="carousel slide carousel-fade container" data-bs-ride="carousel">
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <img src="https://soydechollos.com/storage/oferta/2-pizzas-medianas-a-domicilio-de-hasta-2-ingredientes-por-69.png" className="d-block w-100 " height="500" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://img.grouponcdn.com/deal/4KnwyiEmbAKVrYVcNrAbyZfc1zuG/4K-700x420/v1/t600x362.jpg" className="d-block w-100"  height="500" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://ubces.vams.es/images/featured/_slider_g/Telepi-Cupon-UrbanCheckFamilyDays-448x280-20117.jpg" className="d-block w-100" height="500"alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Slide ;
