import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";

const App = () => {
	const infoCard = faker.helpers.createCard();
	const images = faker.image;
	return (
		<div className="ui container comments">
			<CommentDetail photos={images} data={infoCard} name={infoCard.name} />
			<CommentDetail photos={images} data={infoCard} name={infoCard.name} />
			<CommentDetail photos={images} data={infoCard} name="Juan Manuel" />
		</div>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
