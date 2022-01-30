import * as React from "react";
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background: purple;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin: 12px;
`;

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};
