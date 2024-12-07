// HomeScreen.styles 

import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  color: #333;
;`

export const MovieItem = styled.TouchableOpacity`
  border-radius: 12px;
  overflow: hidden;
  background-color: transparent;
  shadow-color: rgba(0, 0, 0, 0.2);
  shadow-offset: 0px 4px;
  shadow-radius: 6px;
  shadow-opacity: 0.3;
  elevation: 5;
;`

export const MovieImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
;`

export const MovieTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
;
`

export const HeartIcon = styled(Ionicons)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
;
`