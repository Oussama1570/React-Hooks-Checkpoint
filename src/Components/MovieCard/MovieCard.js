import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieRating from "../Rating/Rating";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
	return (
		<div className='card-btn'>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src={movie.posterUrl} />
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>{movie.description}</Card.Text>
					<MovieRating isMovieRating={true} movieRating={movie.rate} />
					<div>
						{/* <Button variant='info'>
							<a href={movie.trailer} target={"blanck"}>
								Trailer
							</a>
						</Button> */}
						<Link to={`/movie/${movie.id}`} state={movie}>
							<Button variant='info'>Description</Button>”{" "}
						</Link>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;
