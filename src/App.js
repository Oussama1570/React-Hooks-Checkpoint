import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import MovieAppTitle from './MovieAppTitle';
import MovieList from '../src/Components/MovieList/MovieList';
import { moviesData } from './Constant/data';
import MovieCard from './Components/MovieCard/MovieCard';
import rating from './Components/Rate/Rating';

import AddMovie  from './Components/AddMovie/AddMovie';
import FilterName from "./Components/FilterName/FilterName"
import Rating from './Components/Rate/Rating';

import handleChange from  './Components/AddMovie/AddMovie';
import HandleClose from './Components/AddMovie/AddMovie';



function App() {

const [movies, setMovies] = useState(moviesData);
const [inputSearch, setInputSearch] = useState("");
const [rating, setRating] = useState(0);


// handle movie 
const add =(newMovie) => 
  { setMovies([...movies, newMovie])

   };





  return (
    <div className="App">




    <MovieAppTitle />

    <FilterName inputSearch={inputSearch}  setInputSearch={setInputSearch}/>
    <Rating isMovieRating={false} rating={rating} setRating={setRating}/>
    <AddMovie add={add} />
    <MovieList movies ={movies} inputSearch={inputSearch} rating={rating}/>

   
    







    </div>
  );
}

export default App;
