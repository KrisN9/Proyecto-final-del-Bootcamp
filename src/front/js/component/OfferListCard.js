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
        {offers.map((offer, index) => {

        /* })} */
        return <div className="card" key={index}>
        <img src={offer.url_image} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 className="card-title">{offer.company_name}</h5>
            <p className="card-text">{offer.title}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{offer.price}</li>
            <li className="list-group-item">{offer.location}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <button className="btn btn-outline-warning">Me gusta!</button>
        </div>
    </div>
})};
    </>
    )
}

export default OfferListCard;