import React, { useEffect, useState } from "react";

const Sidebar = () => {

	const [city, setCity] = useState([]);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/api/city")
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			setCity(response);
		});
	}, []);

    return (
        <div className='sidebar'>
		<div className='heading'>
			<h3>Ofertas en:	</h3>
		</div>
			{city.map((value, index) => {
				return (<div id='listings' className='listings' key={index} value={value.id}>{value.name}</div>);
			})}
		</div>
    )
}

export default Sidebar;