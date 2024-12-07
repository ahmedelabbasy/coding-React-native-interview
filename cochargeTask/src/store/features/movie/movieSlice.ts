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
    setPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
    addLikedMovie: (state, action: PayloadAction<Movie>) => {
      state.likedMovies.push(action.payload);
    },
    removeLikedMovie: (state, action: PayloadAction<number>) => {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    fetchMovies: () => {},
  },
});

export const {
  setPopularMovies,
  addLikedMovie,
  removeLikedMovie,
  setError,
  fetchMovies,
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
