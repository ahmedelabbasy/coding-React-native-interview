import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";

interface MovieState {
  popularMovies: Movie[];
  likedMovies: Movie[];
  error: string | null;
  isLoading: boolean;
}

const initialState: MovieState = {
  popularMovies: [],
  likedMovies: [],
  error: null,
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovies(state, action: PayloadAction<number>) {
      state.isLoading = true;
    },
    setPopularMovies(state, action: PayloadAction<Movie[]>) {
    state.isLoading = false;
    state.popularMovies = [...state.popularMovies, ...action.payload]; // Append new movies
    },
    addLikedMovie: (state, action: PayloadAction<Movie>) => {
      state.likedMovies.push(action.payload);
    },
    removeLikedMovie: (state, action: PayloadAction<number>) => {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setPopularMovies,
  addLikedMovie,
  removeLikedMovie,
  setError,
  fetchMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
