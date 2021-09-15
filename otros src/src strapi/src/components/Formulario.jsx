import React, { useState } from "react";

const Formulario = (props) => {
	const crearTarea = props.crearTarea;
	const [newTask, setnewTask] = useState([]);
	const [newDate, setnewDate] = useState([]);

	const handleTask = (e) => {
		setnewTask(e.target.value);
	};
	const handleDate = (e) => {
		setnewDate(e.target.value);
	};
	const handleSubmit = () => {
		crearTarea({
			Task: newTask,
			Date: newDate,
		});
	};
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input type="text" name="Task" id="Task" placeholder="Escribe la Tarea..." onChange={handleTask} />
				<input type="date" name="Date" id="Date" onChange={handleDate} />
				<button type="submit" className="btn">
					Crear tarea
				</button>
			</form>
		</div>
	);
};

export default Formulario;
