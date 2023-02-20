import React from "react";


const Slide=()=>{

    return (
          
        <div id="carouselExampleFade" className="carousel slide  carousel-fade  container col-md-11 " data-bs-ride="carousel">  {/*container col-md-10 me-4 ms-4 // pendiente ver si queda mejor asi */ }
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <img src="https://www.cbmajadahonda.com/wp-content/uploads/2021/09/220427-VIPS-Banner-Patrocinadores-Deportivos-300x250px_CBM-Baloncesto-Majadahonda.png" className="d-block w-100" height="650" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.theoutletstoresalicante.es/wp-content/uploads/2019/03/TacoBell_Happy-Day-Adaptaciones_02_FB-1200x1200.png" className="d-block w-100"  height="650" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://readyme.app/wp-content/uploads/2021/12/3.png" className="d-block w-100" height="650"alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://pbs.twimg.com/media/D-uYIS3W4AArUgI.png" className="d-block w-100" height="650"alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.subwaypanama.com/content/20230103085737-1.jpg " className="d-block w-100 " height="650" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://static.kfc.es/images/static-page/promo/dilemaV2/hero-mobile.jpg" className="d-block w-100 " height="650" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.hotelmalagapremium.com/wp-content/uploads/2018/03/MPH-noticia-sushi-take-away.jpg" className="d-block w-100 " height="650" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://sextavenida.com/wp-content/uploads/2022/04/220401_Pantalla-1080x1080_Calzone-10-1024x1024.jpg" className="d-block w-100 " height="650" alt="..."/>
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
