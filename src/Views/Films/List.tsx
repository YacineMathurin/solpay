import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from "../../reducers/store";
import Pagination from 'react-bootstrap/Pagination';
import { setActivePage } from "../../reducers/films";
import { Form } from "react-bootstrap";

export interface IList {
	list: {
		title: string,
		overview: string,
		id: number,
		poster_path: string
	}[]
};



const FilmList = () => {
	// Declarations
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();

	const handleSearch = (search: string) => {
		// Set Active Page to 1 as the list array isn't sliced yet
		dispatch(setActivePage(1));
		setSearch(search);
	}

	let list: IList["list"] = useSelector((state: RootState) => state.filmsList.list);
	const activePage:  number = useSelector((state: RootState) => state.filmsList.active);
	
	// Whenever we search
	if (search !== "")
		list = list.filter(item => item.title.toUpperCase().indexOf(search.toUpperCase()) > -1);

	// Pagination
	const totalFilms = list.length;
	const pageSize = 5;
	const pageCount = Math.ceil(totalFilms/pageSize);
	let items = [];
	for (let number = 1; number <= pageCount; number++) {
	  items.push(
		<Pagination.Item key={number} active={number === activePage} onClick={()=>dispatch(setActivePage(number))}>
		  {number}
		</Pagination.Item>,
	  );
	}
	const pageMovie = list.slice(((activePage - 1) * pageSize),(pageSize * activePage));

	return (
		<div className="movie-list">
			{/* Search Input */}
			<Form className="search" autoComplete="off">
				<Form.Control type="text" placeholder="Rechercher un film" onChange={(e) => handleSearch(e.currentTarget.value) }/>
			</Form>

			{pageMovie.map(item => ( 
				<div 
					key={item.id}
					className="movie-link-container"
				>
				<Link to={{
						pathname: item.id.toString(),
						state: {
							id: item.id,
							title: item.title,
							overview: item.overview
						}
					}}
					className="movie-link"
				>
					<p className="title">{item.title}</p>
					<p>{item.overview}</p>
				</Link>
				</div>
			))}
			<Pagination>
				<Pagination.First disabled={activePage === 1} onClick={()=>dispatch(setActivePage(1))}/>
				<Pagination.Prev disabled={activePage === 1} onClick={()=>dispatch(setActivePage(activePage - 1))} />
					{items}
				<Pagination.Next disabled={activePage === pageCount} onClick={()=>dispatch(setActivePage(activePage + 1))} />
				<Pagination.Last disabled={activePage === pageCount} onClick={()=>dispatch(setActivePage(pageCount))}/>
			</Pagination>
		</div>
	);
};

export default FilmList;
