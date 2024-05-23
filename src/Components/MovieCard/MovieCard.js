import React from 'react';

import Card from 'react-bootstrap/Card';
import Rating from '../Rate/Rating';
import MovieRating from "../Rate/Rating"



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const MovieCard = ({movie}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>
          {movie.rate}
        </Card.Text>
        <MovieRating isMovieRating={true} MovieRating={movie.rate}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard;
