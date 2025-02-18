import styled, { keyframes } from "styled-components";

interface Props {
  width: string;
}

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
  animation: ${fadeIn} 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 15px;
    animation: ${fadeInTitle} 1s ease-in-out;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 35%;
  padding: 32px;
  margin-top: 16px;
  border-radius: 16px;
  border: 4px solid #263849;
  background-color: #41506b;

  div {
    display: flex;
    gap: 24px;
  }
`;

export const TextArea = styled.input<Props>`
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: ${({ width }) => width};
  background-color: white;
  border: none;
  border: 2px solid #263849;
  border-radius: 8px;
`;

export const Submit = styled.button`
  text-align: center;
  border: none;
  background-color: #56b280;
  border: 2px solid #448f65;
  border-radius: 8px;
  font-size: 24px;
  width: 140px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  color: white;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
