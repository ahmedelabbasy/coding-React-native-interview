import styled from "styled-components/native";
import { Animated } from "react-native";

export const PopupContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const PopupOverlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`;

export const PopupContent = styled(Animated.View)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  width: 90%;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 0px 10px;
  shadow-radius: 10px;
  elevation: 5;
`;

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Details = styled.View`
  padding: 20px;
`;

export const DetailText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

export const DetailLabel = styled.Text`
  font-weight: bold;
  color: #555;
`;
