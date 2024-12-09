import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.cardBackground};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  align-self: flex-start;
  color: ${({ theme }) => theme.text};
`;
