import React from "react";
import { Movie } from "../../types";
import { HeartIcon, MovieImage, MovieItemContainer, MovieTitle, Rate, StarIcon } from "./MovieItem.styles";
import { API_IMAGE_URL } from "../../constants";

interface MovieItemProps {
  onPress: () => void;
  movie: Movie;
  itemWidth: number;
  isLiked: boolean;
  onToggleLike: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({
  onPress,
  movie,
  itemWidth,
  isLiked,
  onToggleLike,
}) => {

  const movieUri = `${API_IMAGE_URL}${movie.poster_path}`;
  const heartType = isLiked ? "heart" : "heart-outline";
  const isTopRated = movie.vote_average > 7;
  const movieMoveAvg = movie.vote_average.toString().slice(0, 3);

  return (
    <MovieItemContainer onPress={onPress} itemWidth={itemWidth}>
      <MovieImage
        source={{
          uri: movieUri,
        }}
      >
        <HeartIcon name={heartType} onPress={onToggleLike} />
        {isTopRated && (
          <>
            <StarIcon name={"star"} />
            <Rate>{movieMoveAvg}</Rate>
          </>
        )}
        <MovieTitle>{movie.title}</MovieTitle>
      </MovieImage>
    </MovieItemContainer>
  );
};

export default React.memo(MovieItem);
