import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { func } from "prop-types";

const PruebaAxios = () => {
	/*
    instalar: npm install axios
    incluir : <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

*/
	// const url = "https://swapi.dev/api/people/";
	const url = "https://jsonplaceholder.typicode.com/posts/";
	// const axios = require("axios").default;
	//PETICION GET
	(async function () {
		const peticion = await axios.get(url);
		console.log(peticion.data);
	})();

	/******************************************************/
	//BUSCAR EL USUARIO QUE ESCRIBIO EL POST NUMERO X DENTRO DE LA LISTA DE POSTS
	const getNombre = (idPost) => {
		fetch(`${url}${idPost}`)
			.then((res) => res.json())
			//obtengo el id del usuario que escribio el post
			.then((datos) => {
				fetch(`https://jsonplaceholder.typicode.com/users/${datos.userId}`)
					//obtengo el nombre del usuario que escribio el post
					.then((res) => res.json())
					.then((datos) => console.log("con then y catch: ", datos.name));
			});
	};

	const getNombreAsync = async (idPost) => {
		try {
			const resPost = await fetch(`${url}${idPost}`);
			const datosPost = await resPost.json();
			// console.log(datosPost);
			const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${datosPost.userId}`);
			const datosUser = await resUser.json();
			console.log("con await: ", datosUser.name);
		} catch (error) {
			console.log(error);
		}
	};

	const getNombreAxios = async (idPost) => {
		try {
			const resPost = await axios(`${url}${idPost}`);
			// console.log("axios", resPost.data.userId);
			const datosUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
			console.log("con axios: ", datosUser.data.name);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		// getNombreAxios(6);
		// getNombre(6);
		// getNombreAsync(6);
	}, []);

	return (
		<>
			<div className="container">
				<div className="accordion" id="accordionExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								PROBANDO AXIOS
							</button>
						</h2>
						<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>Axios es una librería de JavaScript basada en le protocolo XMLHTTPRequest, con el objetivo de simplificar aún más el proceso de petición de datos a APIs, tanto en este como en la API fetch.</p>
								<p>Las ventajas de Axios sobre fetch son las siguientes:</p>
								<ul>
									<li>Llamada a los diferentes métodos de una RESTful API directamente desde axios (por ej `axios.get`)</li>
									<li>No es necesario convertir de json a JS o viceversa. Axios se encarga de hacerlo.</li>
									<li>Mejor información sobre los mensajes de error cuando estos se producen.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PruebaAxios;
