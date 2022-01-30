import styled from "@emotion/styled";

export const MenuItem = styled.div`
  margin: 0 12px;
  font-weight: bold;
  cursor: pointer;

  &.is-active {
    color: ${props => props.theme.color.primary};
  }
`;
