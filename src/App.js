import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MovieAppTitle from './MovieAppTitle';
import MovieList from '../src/Components/MovieList/MovieList';
import { moviesData } from './Constant/data';

import AddMovie  from './Components/AddMovie/AddMovie';
import FilterName from "./Components/FilterName/FilterName"
import Rating from './Components/Rate/Rating';



import Navigation from "./Components/Navigation/Navigation"


function App() {

const [movies, setMovies] = useState(moviesData);
const [inputSearch, setInputSearch] = useState("");
const [rating, setRating] = useState(1);


// handle movie 
const add =(newMovie) => 
  { setMovies([...movies, newMovie]);

   };





  return (
    <div className="App">


<Navigation/>
    
    <MovieAppTitle />

    <FilterName inputSearch={inputSearch}  setInputSearch={setInputSearch}/>
    <Rating isMovieRating={false} rating={rating} setRating={setRating}/>
    <AddMovie add={add} />
    <MovieList movies ={movies} inputSearch={inputSearch} rating={rating} className="MoviesList"/>

   
    







    </div>
  );
}

export default App;
