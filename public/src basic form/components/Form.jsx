import React, { useState } from "react";

const Form = (props) => {
	const addNewItem = props.addNewItem;
	const [newItem, setNewItem] = useState({
		name: "",
		email: "",
		birthdate: "",
	});

	const handleInputs = (e) => {
		setNewItem({
			...newItem,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewItem(newItem);
	};

	return (
		<div className="container card p-4 border-0">
			<h2 className="text-center p-3 mb-4">Add New Customer</h2>
			<form action="" className="" onSubmit={handleSubmit}>
				<div className="card mx-5 px-5 border-0">
					<input type="text" placeholder="Name" name="name" onChange={handleInputs} />
					<input type="email" placeholder="Email" name="email" onChange={handleInputs} />
					<input type="date" placeholder="Birthdate" name="birthdate" onChange={handleInputs} />
					<button type="submit">Add New</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
