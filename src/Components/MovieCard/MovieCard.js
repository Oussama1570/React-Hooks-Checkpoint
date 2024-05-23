import React from 'react';
import { Card, Button} from "react-bootstrap";
import MovieRating from "../Rate/Rating"






const MovieCard = ({movie}) => {
  return (
    <div className='Cards'>
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
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard;
