import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nosotros = () => {
	const [civilizations, setCivilizations] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
		const datos = response.data;
		console.log(datos);
		setCivilizations(datos.civilizations);
	};
	return (
		<div>
			<h2>Civilizaciones del Age of Empire II</h2>
			<ul>
				{civilizations.map((item) => {
					return (
						<li key={item.id}>
							<Link to={`/nosotros/${item.id}`}>
								{item.name} ({item.expansion})
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Nosotros;
