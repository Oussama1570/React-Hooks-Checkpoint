import React from 'react'
import { Routes, Route} from "react-router-dom";
import App from "./App"
import MovieDescription from "../src/Components/MovieDescription/MovieDescription"
import {Navbar} from "react-bootstrap"
import Navigation from "./Components/Navigation/Navigation"

const Home = () => {
  return (
    <div>
      <Navigation/>

      <Routes>
<Route  excat path='/' element={<App/>} /> 
<Route path ='/movie/:id' element={<MovieDescription/>} /> 

      </Routes>
    </div>
  );
};

export default Home
