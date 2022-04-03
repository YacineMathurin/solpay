import { RouteProps, useLocation, useParams, useNavigate } from "react-router-dom";
import { IList } from "./List";
import { RootState } from "../../reducers/store";
import { useSelector } from 'react-redux';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const FilmDetail: React.FC<RouteProps> = (props) => {
	/*
		const location = useLocation();
		console.log("State:",location);
	*/
	const [image, setImage] = useState("");
	useEffect(() => {
		(async() => {
				// await getImg();

			}
		)()
	}, []);
	const URL: String = "https://api.themoviedb.org/3/";
	let url = `movie/top_rated`;

	const getImg = async (reference: string) => {
		const URL: String = "https://api.themoviedb.org/3";
		const BEARER_TOKEN: String =
			"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTRiMzI2YTU2NWE4ZDAyNzc3MGM3NTliMTBjODgzZSIsInN1YiI6IjYyMWYyODY0MDU4MjI0MDA0Mjk0ZTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hU9A4u6Hf68R2s-3-1uE6Vj902Urhm5MxYC6NJg5PY0";

		let url = `movie/top_rated`;

		try {
			const res = await axios({
				method: 'get',
				url: URL  + reference,
				headers: {
					"Authorization": `Bearer ${BEARER_TOKEN}`
				}
			});

			console.log("Res:", res);
			// return data;
		} catch (error) {
			throw error;
		}
	}
	const navigate = useNavigate();

	const { filmId } = useParams();
	const id = Number(filmId);
	const list: IList["list"] = useSelector((state: RootState) => state.filmsList.list)
	
	const film = list.filter(item => item.id == id);
	console.log("Film", film);
	getImg(film[0]["poster_path"]);
	return (
		<div className="movie-detail">
			<Button variant="secondary" style={{width: "50%"}} onClick={() => navigate(-1)}>Retour</Button>
			<div className="movie">
				<div className="movie-poster">
					{/*<img src={URL + url + film[0]["poster_path"]} alt={film[0]["title"]} />*/}
				</div>
				<div className="movie-info">
					<p style={{fontWeight: "bold"}}>{film[0]["title"]}</p>
					<p>{film[0]["overview"]}</p>
				</div>
			</div>

		</div>
	);
};

export default FilmDetail; 
