import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { GAP } from "../../constants";

export const MovieItemContainer = styled.TouchableOpacity<{ itemWidth: number }>`
  width: ${(props) => props.itemWidth}px;
  height: ${(props) => props.itemWidth * 1.5}px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
  shadow-color: ${({ theme }) => theme.shadow};
  shadow-offset: 0px 4px;
  shadow-radius: 6px;
  shadow-opacity: 0.3;
  elevation: 5;
  margin-bottom: ${GAP}px;
`;

export const MovieImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
`;

export const MovieTitle = styled.Text`
  font-size: 14px;
  width: 100%;
  font-weight: bold;
  color: white;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  align-self: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeartIcon = styled(Ionicons)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: ${({ theme }) => theme.heartColor};
`;

export const StarIcon = styled(Ionicons)`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 35px;
  color: ${({ theme }) => theme.starColor};
`;

export const Rate = styled.Text`
  position: absolute;
  top: 13px;
  left: 10px;
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.rateColor};
`;



