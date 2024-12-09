import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikedMovie, removeLikedMovie } from "../store/slices/movieSlice";
import { RootState } from "../store";
import { Movie } from "../types";

export const useMovies = () => {
  const dispatch = useDispatch();

    const { likedMovies } = useSelector((state: RootState) => state.movies);
    const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

      const handleMoviePress = (movie: Movie) => {
        setSelectedMovie(movie);
      };

      const handleToggleLike = (movie: Movie) => {
        const isLiked = likedMovies.some((liked) => liked.id === movie.id);
        if (isLiked) {
          dispatch(removeLikedMovie(movie.id));
        } else {
          dispatch(addLikedMovie(movie));
        }
      };

  return { selectedMovie, setSelectedMovie, handleMoviePress, handleToggleLike };
};
