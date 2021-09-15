import reactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ShowItem from "./components/ShowItem";
import axios from "axios";

const App = () => {
	const [list, setList] = useState([]);
	const url = "http://localhost:5000/crm";

	useEffect(() => {
		getList();
	}, []);

	const getList = async () => {
		try {
			const response = await axios(url);
			setList(response.data.customers);
			// console.log(response.data.customers);
		} catch (error) {
			console.log("Error GET", error);
		}
	};
	const addNewItem = async (entry) => {
		console.log(entry);
		try {
			await axios.post(url, entry);
		} catch (error) {
			console.log("Error Post", error);
		}
		getList();
	};
	return (
		<div>
			<Form addNewItem={addNewItem} />
			<ShowItem dataList={list} />
		</div>
	);
};

export default App;

reactDOM.render(<App />, document.getElementById("root"));
