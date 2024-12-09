import styled from "styled-components/native";
import { Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const PopupContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.popupContainer};
  z-index: 10;
`;

export const PopupOverlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.PopupOverlay};
`;

export const PopupContent = styled(Animated.View)`
  background-color: ${({ theme }) => theme.PopupContentBackground};
  border-radius: 20px;
  overflow: hidden;
  width: 90%;
  shadow-color: ${({ theme }) => theme.PopupContentShaddow};
  shadow-opacity: 0.2;
  shadow-offset: 0px 10px;
  shadow-radius: 10px;
  elevation: 5;
`;

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 300px;
  justify-content: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.PopupCloseButtonBackground};
  padding: 10px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  height: 40px;
  padding: 5px;
`;

export const Details = styled.View`
  padding: 20px;
`;

export const DetailText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.PopupDetailText};
`;

export const DetailLabel = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.PopupDetailLabel};
`;

export const StarIcon = styled(Ionicons)`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 50px;
  color: ${({ theme }) => theme.starColor};
`;

export const Rate = styled.Text`
  position: absolute;
  top: 19px;
  left: 16px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.rateColor};
`;
