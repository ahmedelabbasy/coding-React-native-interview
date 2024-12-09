import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.cardBackground};
  `;

  export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.cardBackground};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 50px;
    margin-top: 10px;
  `;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  width: 100%;
`;
