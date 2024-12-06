import styled from "styled-components";

export const StyledIcon = styled.svg`
  display: flex;
  padding: 0;
  transition: all 0.3s ease;

  fill: ${({ theme }) => theme.colors.iconColor};
  path {
    stroke: ${({ theme }) => theme.colors.iconStroke};
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 769px) {
    width: 24px;
    height: 24px;
  }
`;
