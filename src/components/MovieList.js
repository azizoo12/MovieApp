import MovieCard from "./MovieCard";
import React  from 'react';
const MovieList = ({ movies }) => {
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    );
  };
  



  export default MovieList