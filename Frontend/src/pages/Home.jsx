import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useDebounce } from "../hooks/useDebounce";

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

    <div>
       <h1>Movie Night Picker</h1>
      <input 
        type="text" 
        placeholder="Search movies by title or genre..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div> 
    </div>
  )
};

export default Home;
