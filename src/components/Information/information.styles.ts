import styled from "styled-components";

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 64px 0;
  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.gray50};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 32px 0;
  }
`;

export const InformationItem = styled.section`
  display: flex;
  flex-direction: row;
  gap: 48px;
  padding: 0 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.3s;
  flex: 1;
  img {
    display: flex;
    position: relative;
    width: 400px;
    height: 480px;
    object-fit: cover;
    object-position: center;
    margin-left: 40px;
    border: 8px solid ${({ theme }) => theme.colors.gray50};
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 16px;
    width: 400px;
    height: 480px;
    background-color: ${({ theme }) => theme.colors.gray200};
    z-index: 1;
  }

  @media (max-width: 768px) {
    img {
      width: 280px;
      height: 360px;
      border: 4px solid ${({ theme }) => theme.colors.gray50};
    }

    &::after {
      top: 32px;
      left: 24px;
      width: 320px;
      height: 360px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.Heading2Desktop.fontFamily};
  font-size: ${({ theme }) => theme.typography.Heading2Desktop.fontSize};
  font-weight: ${({ theme }) => theme.typography.Heading2Desktop.fontWeight};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.Heading2Mobile.fontSize};
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.typography.Body1.fontFamily};
  font-size: ${({ theme }) => theme.typography.Body1.fontSize};
  line-height: ${({ theme }) => theme.typography.Body1.lineHeight};
  color: ${({ theme }) => theme.colors.text};
`;

export const QuickInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const QuickInfoItem = styled.li`
  font-family: ${({ theme }) => theme.typography.Body2.fontFamily};
  font-size: ${({ theme }) => theme.typography.Body2.fontSize};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.gray200};
  padding: 8px 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.Body3.fontSize};
  }
`;
