
import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '100%', height: '480px'}}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
