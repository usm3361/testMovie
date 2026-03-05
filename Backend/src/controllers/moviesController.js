import { fetchMovies } from "../services/moviesService.js"


export const getMovies = (req, res)=>{
    try {
        const movies = fetchMovies()
        res.json(movies)
    } catch (error) {
        res.status(500).json({message: "Failed to fetch movies"})
    }
}