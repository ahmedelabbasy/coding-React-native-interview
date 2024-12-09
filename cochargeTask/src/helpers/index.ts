import { GAP, NUM_COLUMNS } from "../constants";
import { Movie } from "../types";

export const getItemWidth = (width: number) =>
  (width - GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export const isLiked = (likedMovies: Movie[], movieId: number) => {
  return likedMovies.some((liked) => liked.id === movieId);
};
