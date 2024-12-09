import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  fetchMovies,
} from "../../store/slices/movieSlice";
import MovieItem from "../../components/MovieItem/MovieItem";
import { GAP, NUM_COLUMNS, SEARCH_PLACEHOLDER } from "../../constants";
import { Movie } from "../../types";
import AppError from "../../components/AppError/Loading";
import AppLoading from "../../components/AppLoading/AppLoading";
import { Container, Title } from "../../styles";
import MovieDetailsPopup from "../../components/MovieDetailsPopup/MovieDetailsPopup";
import { Header, ListContainer, SearchIcon, SearchInput } from "./HomeScreen.styles";
import { useTheme } from "styled-components/native";
import { useMovies } from "../../hooks/useMovies";

  const { width } = Dimensions.get("window");
  const ITEM_WIDTH = (width - GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const HomeScreen: React.FC = () => {
  const { popularMovies, likedMovies, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState<number>(1);
  const flatListRef = useRef<FlatList>(null);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchWidth = useRef(new Animated.Value(0)).current;
  const iconRotation = useRef(new Animated.Value(0)).current;

  const theme = useTheme();

    const {
      selectedMovie,
      setSelectedMovie,
      handleMoviePress,
      handleToggleLike,
    } = useMovies();

  // Toggle search state
  const toggleSearch = () => {
    Animated.timing(searchWidth, {
      toValue: isSearchActive ? 0 : 300, // Increase the width of the input when active
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(iconRotation, {
      toValue: isSearchActive ? 0 : 1, // Rotate the icon to "X" when active
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsSearchActive(!isSearchActive);
    setSearchText(""); 
  };

  const handleEndReached = () => {
    if (!isLoading) {
      setPageNumber((prevPage) => prevPage + 1); // Increment page number
    }
  };

    useEffect(() => {
      // Fetch movies when the page number changes
      dispatch(fetchMovies(pageNumber));
    }, [dispatch, pageNumber]);

    useEffect(() => {
      // Initial fetch when the page number changes
      dispatch(fetchMovies(pageNumber));
    }, [dispatch, pageNumber]);

  // Keep the scroll position after new data is added
  useEffect(() => {
    if (flatListRef.current && pageNumber > 1) {
      flatListRef.current.scrollToEnd({ animated: false });
    }
  }, [popularMovies, pageNumber]);

  // Filtered movies based on search query
  const filteredMovies = popularMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

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


  if (error) {
    return <AppError error={error} />;
  }

  return (
    <Container>
      <Header>
        {isSearchActive ? (
          <Animated.View style={{ width: searchWidth }}>
            <SearchInput
              placeholderTextColor={theme.placeholderText}
              value={searchText}
              onChangeText={setSearchText}
              placeholder={SEARCH_PLACEHOLDER}
            />
          </Animated.View>
        ) : (
          <Title>Popular Movies</Title>
        )}
        <TouchableOpacity onPress={toggleSearch}>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: iconRotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            }}
          >
            <SearchIcon name={isSearchActive ? "close" : "search"} />
          </Animated.View>
        </TouchableOpacity>
      </Header>
      <ListContainer>
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id.toString() + "+" + index.toString()
          }
          numColumns={NUM_COLUMNS}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          contentContainerStyle={{
            paddingHorizontal: GAP,
            paddingVertical: GAP,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: GAP,
          }}
          onEndReached={() => !searchText && handleEndReached()}
          onEndReachedThreshold={0.5}
          ref={flatListRef}
          ListFooterComponent={isLoading ? <AppLoading /> : null}
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

export default HomeScreen;
