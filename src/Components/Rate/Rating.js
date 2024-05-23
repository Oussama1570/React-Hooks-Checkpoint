import { useState } from "react";
import React from "react";
import {Rate} from "antd";


const Rating = ({rating, isMovieRating, setRating, movieRating }) => {
  const handleChange = (value) => {
    setRating(value);
   };



  return isMovieRating ? (
    <div>
          
      <Rate disabled Value={movieRating}/>

      </div>
    
) : (

  <div>
      <Rate onChange={handleChange} Value={rating}/>
    
    </div>
  );
};

export default Rating;
