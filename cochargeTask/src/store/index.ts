import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieReducer from "./slices/movieSlice";
import { movieSaga } from "./sagas/movieSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store with reducers and saga middleware
const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(movieSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
