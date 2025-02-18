import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1 = styled.h1`
  color: #90f6d7;
  font-size: 24px;
`;

export const Logo = styled.img``;

export const Search = styled.input`
  max-width: 200px;
  width: 100%;
  height: 32px;
  text-align: left;
  border: none;
  padding: 8px;
  border-radius: 8px;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background-color: #41506b;
  border-bottom: 4px solid #263849;
  border-top: 4px solid #263849;

  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const AddContact = styled(Link)`
  text-align: center;
  border-radius: 50%;
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  background-color: #90f6d7;
  font-size: 36px;
  position: absolute;
  left: 36px;
  cursor: pointer;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
