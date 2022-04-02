import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { getFilmsList } from "../../api/moviesdatabase";
// import { RootState } from '../../app/store'
import { useDispatch } from 'react-redux';
import { populateFilms } from "../../reducers/films";

const Home = () => {
	// Similar to componentDidMount and componentDidUpdate:
	const dispatch = useDispatch();
	useEffect(() => {
		(async() => {
				const data = await getFilmsList();
				console.log("Movies", data);
				dispatch(populateFilms(data));
			}
		)()
	}, []);
	return (
		<div>
			<h1>HOME</h1>
			<Link to="/films">Films</Link>
		</div>
	)
};

export default Home;
