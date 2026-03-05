import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//"../data/movies.raw.json"
const moviesPath = path.join(__dirname, "..", "data", "movies.json");

//"../data/seats.json"
const seatsPath = path.join(__dirname, "..", "data", "seats.json");

export const getMovies = async (req, res) => {
  try {
    const moviesData = await fs.readFile(moviesPath, "utf-8");
    const movies = JSON.parse(moviesData);

    const seatsData = await fs.readFile(seatsPath, "utf-8");
    const seats = JSON.parse(seatsData);

    res.status(200).json({ movies, seats });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
};
