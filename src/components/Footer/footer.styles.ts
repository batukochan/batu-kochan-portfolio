import styled from "styled-components";

export const StyledFooter = styled.section`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 0px;
  gap: 48px;
  .c-item-01 {
    width: 576px;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 64px 0px;

    .c-item-01,
    .c-item-02,
    .c-item-03 {
      width: 320px;
    }
  }
`;
export const FooterItem01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const FooterUnit01 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;
export const PreFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 48px 48px 0 0;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray50};
  @media (max-width: 768px) {
    border-radius: 32px 32px 0 0;
  }
`;
