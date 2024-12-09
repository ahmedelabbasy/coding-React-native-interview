import { takeLatest, call, put } from "redux-saga/effects";
import {
  setPopularMovies,
  setError,
  fetchMovies,
} from "../slices/movieSlice";
import { Movie } from "../../types";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchMoviesAPI } from "../../services/APIs";
import { UNKNOWN_ERROR } from "../../constants";

function* fetchMoviesSaga(action: PayloadAction<number>) {
  try {
    const movies: Movie[] = yield call(fetchMoviesAPI, action.payload); 
    yield put(setPopularMovies(movies)); 
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(setError(error.message)); 
    } else {
      yield put(setError(UNKNOWN_ERROR));
    }
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesSaga); 
}
