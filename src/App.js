import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

const App = () => {
	return (
		<div className="App">
			<section className="App-content">
				<h1>App</h1>
				<Link to="/search/panda">Gifs de pandas</Link>
				<Link to="/search/morty">Gifs de morty</Link>
				<Link to="/search/rick">Gifs de rick</Link>
				<Route path="/search/:keyword" component={ListOfGifs} />
			</section>
		</div>
	);
};

export default App;
