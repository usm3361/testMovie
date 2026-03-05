import { create } from "zustand";

export const useStore = create((set) => ({
  movies: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  seatSelections: {},

  setMovies: (movies) => set((prevState) => ({ ...prevState, movies })),
  setSearchQuery: (value) => set({ searchQuery: value }),
  setLoading: (boolean) => set({ isLoading: boolean }),
  setError: (message) => set({ error: message }),
  selectSeat: (movieId, seatNumber) =>
    set((state) => ({
      seatSelections: { ...state.seatSelections, [movieId]: seatNumber },
    })),
}));
