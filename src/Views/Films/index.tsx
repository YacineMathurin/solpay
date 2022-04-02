import { Link, Outlet } from "react-router-dom";

const Films = () => {
	return (
		<div>
			<h1>FILMS SECTION</h1>
			<Link to="list">Movies List</Link>
			<Link to="5">Movies Details</Link>
			<Outlet />
		</div>
	);
};

export default Films;
