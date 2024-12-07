import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const MovieItem = styled.View`
  margin-bottom: 12px;
  padding: 8px;
  background-color: #f9f9f9;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
  text-align: center;
  margin-horizontal: 16px;
`;
