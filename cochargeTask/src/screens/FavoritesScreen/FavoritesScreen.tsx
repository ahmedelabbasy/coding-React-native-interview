import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Container,
  Title,
  ListContainer,
  Header,
} from "./FavoritesScreen.styles";
import { Dimensions, FlatList } from "react-native";
import { Movie } from "../../types";
import { GAP, NUM_COLUMNS_FAVORITES } from "../../constants";
import MovieItem from "../../components/MovieItem/MovieItem";
import MovieDetailsPopup from "../../components/MovieDetailsPopup/MovieDetailsPopup";
import { useMovies } from "../../hooks/useMovies";

  const { width } = Dimensions.get("window");
  const ITEM_WIDTH =
    (width - GAP * (NUM_COLUMNS_FAVORITES + 1)) / NUM_COLUMNS_FAVORITES;

const FavoritesScreen: React.FC = () => {
  const { likedMovies } = useSelector((state: RootState) => state.movies);
  
  const {selectedMovie, setSelectedMovie, handleMoviePress, handleToggleLike} = useMovies();

    const renderItem = ({ item }: { item: Movie }) => {
      const isLiked = likedMovies.some((liked) => liked.id === item.id);

      return (
        <MovieItem
          movie={item}
          onPress={() => handleMoviePress(item)}
          onToggleLike={() => handleToggleLike(item)}
          isLiked={isLiked}
          itemWidth={ITEM_WIDTH}
        />
      );
    };

  return (
    <Container>
      <Header>
        <Title>My Favorites</Title>
      </Header>
      <ListContainer>
        <FlatList
          data={likedMovies}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id.toString() + "+" + index.toString()
          }
          numColumns={NUM_COLUMNS_FAVORITES}
          contentContainerStyle={{
            paddingHorizontal: GAP,
            paddingVertical: GAP,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: GAP,
          }}
          onEndReachedThreshold={0.5}
        />
        {selectedMovie && (
          <MovieDetailsPopup
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default FavoritesScreen;
