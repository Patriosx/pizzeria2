import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Civilization from "./components/Civilization";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

const App = () => {
	return (
		<Router>
			<div className="container">
				<h1>Titulo</h1>
				<div className="btn-group">
					<Link to="/" className="btn btn-secondary mt-5">
						Inicio
					</Link>
					<Link to="/contacto" className="btn btn-secondary mt-5">
						Contacto
					</Link>
					<NavLink to="/nosotros" className="btn btn-secondary mt-5" activeClassName="active">
						Civilizaciones del Age of Empire II
					</NavLink>
				</div>
				<hr />
				<Switch>
					<Route path="/nosotros/:id">
						<Civilization />
					</Route>
					<Route path="/nosotros">
						<Nosotros />
					</Route>
					<Route path="/contacto">
						<Contacto />
					</Route>
					<Route path="/">
						<Inicio />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
