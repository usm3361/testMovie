import { Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Seats from "./pages/Seats";

const App = () => {
  return (
      <div className="app-container">
        <header>
          <h1>Movie Night App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="/seats/:id" element={<Seats />} />
          </Routes>
        </main>
      </div>
  );
};

export default App;
