import React, { useEffect } from "react";

const Sidebar = () => {

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/api/city")
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		})
	})

    return (
        <div class='sidebar'>
		<div class='heading'>
			<h3>Ofertas en:</h3>
		</div>
		<div id='listings' class='listings'></div>
		</div>
    )
}

export default Sidebar;