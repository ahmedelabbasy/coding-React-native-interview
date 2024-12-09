import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, Title } from "../../styles";

interface Props {
  error?: string
}
const AppError: React.FC<Props> = ({ error }) => {
  return (
    <Container>
      <Title>Error: {error}</Title>
    </Container>
  );
};

export default AppError;
