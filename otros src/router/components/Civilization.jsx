import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
const Civilization = () => {
	//devuelve el parametro pasado en path
	// console.log(useParams());
	//segun el nombre que pusimos en path(:id)
	const { id } = useParams();

	const [civilization, setCivilization] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
			const datos = response.data;
			console.log(datos);
			setCivilization(datos);
		};
		getData();
	}, [id]);

	return (
		<div>
			<h3>{civilization.name}</h3>
			<p>{civilization.team_bonus}</p>
		</div>
	);
};

export default Civilization;
