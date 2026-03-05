const BASE_URL = "http://localhost:3000/api";

export const fetchMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};
