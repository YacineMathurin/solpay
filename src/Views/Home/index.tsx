import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<h1>HOME</h1>
			<Link to="/films">Films</Link>
		</div>
	)
};

export default Home;
