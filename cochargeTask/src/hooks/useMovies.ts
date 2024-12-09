import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchMovies } from "../store/features/movie/movieSlice";
import { RootState } from "../store";
import { Animated } from "react-native";

export const useMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies, likedMovies, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const fadeAnimations = useRef<Animated.Value[]>([]).current;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (popularMovies.length > 0) {
      while (fadeAnimations.length < popularMovies.length) {
        fadeAnimations.push(new Animated.Value(0));
      }

      const animations = fadeAnimations.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        })
      );

      Animated.sequence(animations).start();
    }
  }, [popularMovies, fadeAnimations]);

  return { popularMovies, likedMovies, error, isLoading, fadeAnimations };
};
