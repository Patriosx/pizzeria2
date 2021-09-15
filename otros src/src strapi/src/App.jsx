import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
import Formulario from "./components/Formulario";

const App = () => {
	const url = "http://localhost:1337/todos";
	const [tareas, setTareas] = useState([]);

	/************************************/
	const getData2 = async () => {
		const response = await fetch(url);
		const json = await response.json();
		if (response.status != 200) throw Error("Error: status " + response.status);
		setTareas(json);
		console.log(tareas);
	};

	useEffect(() => {
		// getData();
		(async function () {
			try {
				await getData2();
				console.log("useEffect", tareas);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [setTareas]);

	const createTask = (nuevaTarea) => {
		const url = "http://localhost:1337/todos";
		//body
		/*
		const tarea = {
			Task: "Entender strApi",
			Date: "2021-10-10",
		};*/
		// request options
		const options = {
			method: "POST",
			body: JSON.stringify(nuevaTarea),
			headers: {
				"Content-Type": "application/json",
			},
		};
		// send POST request
		fetch(url, options)
			.then((res) => res.json())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	/************************************/
	const eliminarTarea = (idTarea) => {
		// setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
		const deleteURL = `http://localhost:1337/todos/${idTarea}`;
		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		};
		// send DELETE request
		fetch(deleteURL, options)
			.then((res) => res.json())
			.catch((err) => console.log(err));
	};
	/************************************/
	const modificarTask = (idTarea) => {
		const putUrl = `http://localhost:1337/todos/${idTarea}`;
		const tarea = {
			Task: "Esto es una prueba del put(modificar)",
			Date: "1888-10-10",
		};
		// request options
		const options = {
			method: "PUT",
			body: JSON.stringify(tarea),
			headers: {
				"Content-Type": "application/json",
			},
		};
		// send PUT request
		fetch(putUrl, options)
			.then((res) => res.json())
			.catch((err) => console.log(err));
	};
	/************************************/

	return (
		<div className="container">
			<h1 className="text-center" id="title">
				TODO LIST
			</h1>
			<div className="card p-4 m-1">
				<Formulario crearTarea={createTask} />
			</div>
			{tareas.map((tarea) => {
				return (
					<div className="card p-2 m-1">
						<p>
							Tarea {tarea.id}: {tarea.Task}
						</p>
						<p>Fecha: {tarea.Date}</p>
						<p>Completado: {tarea.Done.toString()}</p>
						<div className="container">
							<a href="/" onClick={() => eliminarTarea(tarea.id)}>
								Eliminar
							</a>
							<span> </span>
							<a href="/" onClick={() => modificarTask(tarea.id)}>
								Editar
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default App;
