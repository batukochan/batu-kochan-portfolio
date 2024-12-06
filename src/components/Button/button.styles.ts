import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  variant: "default" | "outlined" | "text";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.Body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.Body2.fontWeight};
  font-family: ${({ theme }) => theme.typography.Body2.fontFamily};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ theme, variant }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${theme.colors.buttonBackground};
          color: ${theme.colors.buttonText};

          &:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            transform: scale(1.02);
          }
        `;
      default:
        return "";
    }
  }}
`;
