import styled from '@emotion/styled';
import React from 'react';

interface ButtonTestProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const ButtonContainer = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const ButtonTest = ({ children, onClick }: ButtonTestProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
