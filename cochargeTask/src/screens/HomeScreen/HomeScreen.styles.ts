import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 75px;
`;

export const SearchIcon = styled(Ionicons)`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  margin-right: 20px;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  padding-left: 10px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  placeholder-text-color: ${({ theme }) => theme.text};
  border-radius: 10px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  width: 100%;
  `
  
