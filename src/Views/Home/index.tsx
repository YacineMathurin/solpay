import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container home">
			<h1>HOME</h1>
			<Link to="/films">Display movie list</Link>
		</div>
	)
};

export default Home;
