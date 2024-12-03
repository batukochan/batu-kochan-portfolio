import styled from "styled-components";

export const StyledTag = styled.div<{ variant: "default" | "dark" }>`
  display: inline-block;
  width:min-content;
  padding: 4px 20px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.Body3.fontSize};
  font-weight: ${({ theme }) => theme.typography.Body3.fontWeight};
  font-family: ${({ theme }) => theme.typography.Body3.fontFamily};
  line-height: ${({ theme }) => theme.typography.Body3.lineHeight};
  text-align: center;

  color: ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray200};

  transition: background-color 0.3s ease, color 0.3s ease;
`;
