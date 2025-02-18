import styled, { keyframes } from "styled-components";

const fadeInTitle = keyframes`
  from {
    opacity: 0;
    transform: scale(2.0);
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  animation: ${fadeInTitle} 1s ease-in-out;
  margin: 16px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
