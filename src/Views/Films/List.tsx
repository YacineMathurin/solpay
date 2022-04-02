import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../reducers/store";

export interface ListItem {
	//item: {
		title: String
	//}
}

const FilmList = () => {
	const list = useSelector((state: RootState) => state.filmsList.list)
	console.log("List", list);
	
	return (
		// <div>FILMS LIST</div>
		<div>
			{list.map(item => <p>{item.title}</p>)}
		</div>
	);
};

export default FilmList;
