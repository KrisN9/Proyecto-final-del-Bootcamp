import React, {useState, useEffect} from "react";

const OfferListCard = () => {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/offer/<int:offer_id>")
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            setOffers(response);
          })
      }, []);

    return (
    <>
        <div className="card">
        <img src="https://ubces.vams.es/images/featured/_slider_g/AAFF_urbancheck_pansfriends_web_CAST.JPG" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 className="card-title">Pans & Company, S.L.</h5>
            <p className="card-text">Menú Pans & Friends por 7,95€</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: 7,95€</li>
            <li className="list-group-item">Ubicación: Avinguda del Portal de l'Àngel, 2, Barcelona</li>
        </ul>
        <div className="card-body d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-danger">Me gusta!</button>
        </div>
    </div>
    </>
    )
}

export default OfferListCard;