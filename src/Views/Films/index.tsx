import React, {useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { populateFilms } from "../../reducers/films";
import { getFilmsList } from "../../api/moviesdatabase";
import 'bootstrap/dist/css/bootstrap.min.css';


const Films = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async() => {
				try {
					const data = await getFilmsList();
					console.log("Movies", data);
					dispatch(populateFilms(data));	
				} catch (error) {
					throw new Error("Oups !!");
				}
				
			}
		)()
	}, []);
	return (
		<div className="container">
			<h1 style={{marginTop: 0, paddingTop: "1em"}}>FILMS SECTION</h1>
			<Outlet />
		</div>
	);
};

export default Films;
