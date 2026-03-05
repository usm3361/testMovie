import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useStore } from "../store/useStore.js";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loadMovies } = useStore();

  useEffect(() => {
    if (movies.length === 0) {
      loadMovies();
    }
  }, [movies.length, loadMovies]);

  const movie = movies.find((m) => m.imdbID === id);

  if (!movie) return <div>Loading details...</div>;

  return (
    <div className="movie-details">
      <img src={movie.Images[0]} />
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <p>
        <strong>Runtime:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>Rating:</strong> {movie.imdbRating}
      </p>
      <p>
        <strong>Genres:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Overview:</strong> {movie.Plot}
      </p>

      <button onClick={() => navigate(`/seats/${movie.imdbID}`)}>
        Choose Seat
      </button>
    </div>
  );
};
export default MovieDetails;
