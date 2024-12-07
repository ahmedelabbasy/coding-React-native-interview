import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  setPopularMovies,
  setError,
  fetchMovies,
} from "../features/movie/movieSlice";
import { Movie } from "../../types";

// API call to fetch movies
const fetchMoviesApi = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=83e89ed890cd1ce089d4dc4b4c9758b1"
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching movies");
  }
};

// Saga to handle movie fetching
function* fetchMoviesSaga() {
  try {
    const movies: Movie[] = yield call(fetchMoviesApi); // Fetch movies
    yield put(setPopularMovies(movies)); // Dispatch movies to Redux
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(setError(error.message)); // Dispatch error
    } else {
      yield put(setError("An unknown error occurred"));
    }
  }
}

// Watcher saga for fetching movies
export function* movieSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesSaga); // Trigger saga on fetchMovies action
}
