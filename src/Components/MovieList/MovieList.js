import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, inputSearch, rating }) => {
	return (
		<div
			className='movie-list'
			style={{ display: "flex", justifyContent: "space-around" }}>
			{movies
				.filter(
					(movie) =>
						movie.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
						movie.rate >= rating
				)
				.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
		</div>
	);
};

export default MovieList;
