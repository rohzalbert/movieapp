
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={3} className="mb-4">
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
