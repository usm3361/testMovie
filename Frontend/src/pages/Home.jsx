import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useDebounce } from "../hooks/useDebounce";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { movies, isLoading, error, searchQuery, setSearchQuery, loadMovies } =
    useStore();
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (movies.length === 0) {
      loadMovies();
    }
  }, [movies.length, loadMovies]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.Title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      movie.Genre.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  if (isLoading) return <div>loading movies...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <header>
        <h1>Movie Night Picker</h1>
        <SearchBar />
      </header>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
