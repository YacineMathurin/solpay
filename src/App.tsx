import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Films from './Views/Films';
import FilmList from './Views/Films/List';
import Home from './Views/Home';
import FilmDetail from './Views/Films/Detail';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/films" element={<Films />}>
				<Route path="list" element={<FilmList />} />
				<Route path=":filmId" element={<FilmDetail />}/>
			</Route>
			<Route path="*" element={<Home />} />
		</Routes>
  	</BrowserRouter>
    </div>
  );
}

export default App;
