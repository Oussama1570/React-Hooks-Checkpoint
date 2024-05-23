import React from 'react'
import { Rate } from 'antd'

const Rating = ({Rating, isMovieRating, setRating, movieRating}) => { 

    const handleChange = (value) =>  { 

        setRating (value);
    };

  return isMovieRating ? (
    <div>
      
<Rate disabled value = {movieRating} />

    </div>

  ) : ( 


<div>
      
      <Rate onChange={handleChange} value = {Rating} />
      
          </div>



  );
};

export default Rating
