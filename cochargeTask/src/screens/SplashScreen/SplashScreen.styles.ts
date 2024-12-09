import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.splashBackground};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme.splashImageBackground};
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 200px;
`;

