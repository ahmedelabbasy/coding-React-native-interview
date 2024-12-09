import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding-top: 20px;`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  width: 100%;
`;
