import { RouteProps, useLocation, useParams, useNavigate } from "react-router-dom";
import { IList } from "./List";
import { RootState } from "../../reducers/store";
import { useSelector } from 'react-redux';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const FilmDetail: React.FC<RouteProps> = () => {
	useEffect(() => {
		(async() => {
				/*
				* await getImg();
				* Image link seems broken 
				*/
			}
		)()
	}, []);

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
			/* Image link seems broken, waiting for news ... */
		} catch (error) {
			throw error;
		}
	}
	const navigate = useNavigate();
	const { filmId } = useParams();

	// Not optimal but the state in r.r.dom has issue, waiting for news
	const id = Number(filmId);
	const list: IList["list"] = useSelector((state: RootState) => state.filmsList.list);
	const film = list.filter(item => item.id == id);

	// If filmId doesn't exist
	if (film.length === 0) {
		return (
			<div className="movie-detail">
				<p>&#128519; Oups!! L'Identifiant du film entré n'exist pas.</p>
				<Button variant="secondary" onClick={() => navigate("/films")}>Retour à la liste des films</Button>
			</div>
		);
	}

	getImg(film[0]["poster_path"]);
	return (
		<div className="movie-detail">
			<Button variant="secondary" style={{width: "50%"}} onClick={() => navigate(-1)}>Retour</Button>
			<div className="movie">
				<div className="movie-poster">
					{/*<img src={} alt={film[0]["title"]} />*/}
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
