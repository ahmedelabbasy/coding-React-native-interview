import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import {
  PopupContainer,
  PopupOverlay,
  PopupContent,
  Banner,
  CloseButton,
  Title,
  Details,
  DetailText,
  DetailLabel,
} from "./MovieDetailsPopup.styles";
import { Ionicons } from "@expo/vector-icons";
import { Movie } from "../../types";

interface MovieDetailsPopupProps {
  movie: Movie;
  onClose: () => void;
}

const MovieDetailsPopup: React.FC<MovieDetailsPopupProps> = ({
  movie,
  onClose,
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate popup and background fade-in on mount
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, fadeAnim]);

  const closePopup = () => {
    // Animate popup and background fade-out on close
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <PopupContainer style={{ opacity: fadeAnim }}>
      <PopupOverlay onPress={closePopup} />
      <PopupContent style={{ transform: [{ scale: scaleAnim }] }}>
        <Banner
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
        >
          <CloseButton onPress={closePopup}>
            <Ionicons name="close" size={24} color="white" />
          </CloseButton>
          <Title>{movie.original_title}</Title>
        </Banner>
        <Details>
          <DetailText>
            <DetailLabel>Overview:</DetailLabel> {movie.overview}
          </DetailText>
          <DetailText>
            <DetailLabel>Release Date:</DetailLabel> {movie.release_date}
          </DetailText>
          <DetailText>
            <DetailLabel>Vote Average:</DetailLabel> {movie.vote_average}
          </DetailText>
          <DetailText>
            <DetailLabel>Vote Count:</DetailLabel> {movie.vote_count}
          </DetailText>
        </Details>
      </PopupContent>
    </PopupContainer>
  );
};

export default MovieDetailsPopup;
