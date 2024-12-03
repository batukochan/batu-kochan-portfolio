import styled from "styled-components";

export const ShowcaseContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 96px 32px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  gap: 48px;
  transition: all 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 64px 16px;
  }
`;

export const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    gap: 32px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  span {
    margin-left: 8px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: ${({ theme }) => theme.colors.iconColor};
    transition: color 0.3s ease;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.3s;

  img {
    display: flex;
    position: relative;
    width: 280px;
    height: 320px;
    object-fit: cover;
    object-position: center;
    /* border-radius: 8px; */
    border: 8px solid ${({ theme }) => theme.colors.background};
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 40px;
    width: 280px;
    height: 320px;
    background-color: ${({ theme }) => theme.colors.gray200};
    z-index: 1;
  }

  @media (max-width: 768px) {
    order: 1;
    img {
      border-radius: 4px;
    }

    &::after {
      top: 40px;
      left: -20px;
      width: 336px;
    }
  }
`;

export const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
