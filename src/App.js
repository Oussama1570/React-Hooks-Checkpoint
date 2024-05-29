import React, { useState } from "react";
import { moviesData } from "./Constant/data";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import FilterByName from "./Components/FilterByName/FilterByName";
import Rating from "./Components/Rating/Rating";
import "./App.css";

import MovieAppTitle from "./MovieAppTitle";

function App() {
	const [movies, setMovies] = useState(moviesData);
	const [inputSearch, setInputSearch] = useState("");
	const [rating, setRating] = useState(1);

	const add = (newMovie) => {
		setMovies([...movies, newMovie]);
	};

	return (
		<div className='App'>
			<MovieAppTitle/>
			<div className='container'>
				<FilterByName
					inputSearch={inputSearch}
					setInputSearch={setInputSearch}
				/>
				<Rating 
					isMovieRating={false}
					rating={rating}
					setRating={setRating} 
				/>
			</div>
			<MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
			<AddMovie add={add} />
		</div>
	);
}

export default App;
