import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "../../styles";


const AppLoading: React.FC = ({}) => {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
};

export default AppLoading;
