import React from "react";


const Slide=()=>{

    return (
          
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">  {/*container col-md-10  // pendiente ver si queda mejor asi */ }
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <img src="https://www.cclasrosas.es/wp-content/uploads/2019/09/VIPS-1024x440.jpg" className="d-block w-100" height="600" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.theoutletstoresalicante.es/wp-content/uploads/2019/03/TacoBell_Happy-Day-Adaptaciones_02_FB-1200x1200.png" className="d-block w-100"  height="600" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://ubces.vams.es/images/featured/_slider_g/Telepi-Cupon-UrbanCheckFamilyDays-448x280-20117.jpg" className="d-block w-100" height="600"alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.subwaypanama.com/content/20230103085737-1.jpg " className="d-block w-100 " height="600" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://static.kfc.es/images/static-page/promo/megabox3/hero-desktop.jpg" className="d-block w-100 " height="600" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.hotelmalagapremium.com/wp-content/uploads/2018/03/MPH-noticia-sushi-take-away.jpg" className="d-block w-100 " height="600" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/deunyl3k1/image/upload/s--5d8Z29w_--/b_auto,c_pad,e_gradient_fade:symmetric_pad,f_auto,h_432,q_auto:best,w_768,x_0/v1/pnor/mall_common/0001/07/bfe12fe4045d3eed803f8283f731e8c5f7416b41.jpeg" className="d-block w-100 " height="600" alt="..."/>
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
