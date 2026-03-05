import { create } from "zustand";
import { fetchMovies } from "../api/movies.api";

export const useStore = create((set) => ({
  movies: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  seatSelections: {},

  setSearchQuery: (query) => set({ searchQuery: query }),

  loadMovies: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchMovies();
      set({
        movies: response.movies,
        seats: response.seats,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  selectSeat: (movieId, seatNumber) => {
    set((state) => {
      const updatedSelections = {
        ...state.seatSelections,
        [movieId]: seatNumber,
      };
      localStorage.setItem("seatSelections", JSON.stringify(updatedSelections));
      return { seatSelections: updatedSelections };
    });
  },

  loadSeatSelectionsFromStorage: () => {
    const stored = localStorage.getItem("seatSelections");
    if (stored) {
      set({ seatSelections: JSON.parse(stored) });
    }
  },
}));
