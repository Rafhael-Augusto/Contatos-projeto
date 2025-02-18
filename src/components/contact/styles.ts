import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
`;

export const Contact = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 16px;

  width: 1240px;
  border-radius: 8px;
  border: 1px solid #41506b;
  animation: ${fadeIn} 0.8s ease-in-out;

  input {
    width: 100%;
    border: 1px solid #41506b;
    border-radius: 8px;
    padding: 4px;
  }

  img {
    width: 64px;
    border-radius: 8px;

    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Edit = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  border: 1px solid #41506b;
  cursor: pointer;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    padding: 2px;
  }
`;
