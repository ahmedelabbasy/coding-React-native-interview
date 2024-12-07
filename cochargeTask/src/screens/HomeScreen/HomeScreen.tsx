import React, { useState, useEffect, useRef } from "react";
import { Animated, ActivityIndicator, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addLikedMovie,
  removeLikedMovie,
  fetchMovies,
} from "../../store/features/movie/movieSlice";
import {
  Container,
  Title,
  MovieItem,
  MovieImage,
  MovieTitle,
  HeartIcon,
} from "./HomeScreen.styles";
import MovieDetailsPopup from "../../components/MovieDetailsPopup/MovieDetailsPopup";
import { Movie } from "../../types";

const { width } = Dimensions.get("window");
const GAP = 10; // Space between items
const NUM_COLUMNS = 3;
const ITEM_WIDTH = (width - GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS; // Dynamic width for each item

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { popularMovies, likedMovies, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
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

  const handleToggleLike = (movie: Movie) => {
    const isLiked = likedMovies.some((liked) => liked.id === movie.id);
    if (isLiked) {
      dispatch(removeLikedMovie(movie.id));
    } else {
      dispatch(addLikedMovie(movie));
    }
  };

  const handleMoviePress = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Error: {error}</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Popular Movies</Title>
      <Animated.FlatList
        data={popularMovies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{
          paddingHorizontal: GAP, // Add padding around the grid
          paddingVertical: GAP, // Add vertical spacing
        }}
        columnWrapperStyle={{
          justifyContent: "flex-start", // Align items to the left
          gap: GAP,
        }}
        renderItem={({ item, index }) => {
          const isLiked = likedMovies.some((liked) => liked.id === item.id);
          const opacityAnim = fadeAnimations[index] || new Animated.Value(1);

          return (
            <Animated.View
              style={{
                opacity: opacityAnim,
                transform: [{ scale: opacityAnim }],
              }}
            >
              <MovieItem
                onPress={() => handleMoviePress(item)}
                style={{
                  width: ITEM_WIDTH, // Dynamically calculated width
                  height: ITEM_WIDTH * 1.5, // Maintain 1.5 aspect ratio
                  marginBottom: GAP, // Add spacing between rows
                }}
              >
                <MovieImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                  }}
                >
                  <HeartIcon
                    name={isLiked ? "heart" : "heart-outline"}
                    color={isLiked ? "red" : "white"}
                    onPress={() => handleToggleLike(item)}
                  />
                  <MovieTitle>{item.title}</MovieTitle>
                </MovieImage>
              </MovieItem>
            </Animated.View>
          );
        }}
      />
      {selectedMovie && (
        <MovieDetailsPopup
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
