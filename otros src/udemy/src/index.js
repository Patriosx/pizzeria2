import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import Axios from "./components/PruebaAxios";

const App = () => {
	const infoCard = faker.helpers.createCard();
	const images = faker.image;
	// console.log(infoCard);
	// console.log(infoCard.name);
	return (
		<>
			<Axios />

			{/* <div className="container">
				<h1>UDEMY</h1>
				<div className="ui container comments">
					<CommentDetail photos={images} data={faker.helpers.createCard()} name={faker.helpers.createCard().name} />
					<CommentDetail photos={images} data={infoCard} name={infoCard.name} />
					<CommentDetail photos={images} data={infoCard} name="Juan Manuel" />
				</div>
			</div> */}
		</>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
