import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";

const App = () => {
	const url = "https://api.github.com/users";
	const [aux, setaux] = useState([]);
	/************************************/
	//promesas con then
	/*
	const getData = () => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setaux(json);
			})
			.catch((e) => console.log(e));
	};
	*/
	/************************************/
	/*
Login: mojombo
Login: defunkt
Login: pjhyett
Login: wycats
	*/
	const getData2 = async () => {
		const response = await fetch(url);
		const json = await response.json();

		if (response.status != 200) throw Error("Error: status " + response.status);

		setaux(json);
	};

	useEffect(() => {
		// getData();
		(async function () {
			try {
				const tmp = await getData2();
				console.log("tmp", tmp);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	console.log(aux);
	return (
		<div className="card p-5">
			{aux.map((e) => {
				return <p>Login: {e.login}</p>;
			})}
		</div>
	);
};
export default App;
