import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./features/movie/movieSlice";
import { movieSaga } from "./sagas/movieSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store with reducers and saga middleware
const store = configureStore({
  reducer: {
    movies: movieReducer, // Movies slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(movieSaga);

// RootState type to get the entire state structure
export type RootState = ReturnType<typeof store.getState>;

export default store;
