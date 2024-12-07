import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Container,
  Title,
  MovieItem,
  MovieTitle,
} from "./MovieListScreen.styles";

const MovieListScreen: React.FC = () => {
  const likedMovies = useSelector(
    (state: RootState) => state.movies.likedMovies
  );

  return (
    <Container>
      <Title>Liked Movies</Title>
      {likedMovies.length === 0 ? (
        <Text>No movies liked yet.</Text>
      ) : (
        <FlatList
          data={likedMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem>
              <MovieTitle>{item.title}</MovieTitle>
            </MovieItem>
          )}
        />
      )}
    </Container>
  );
};

export default MovieListScreen;
