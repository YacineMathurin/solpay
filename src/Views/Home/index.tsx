import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container home">
			<h1>HOME</h1>
			<Link to="/films" style={{textDecoration: "none"}}>Display the movie's list</Link>
		</div>
	)
};

export default Home;
