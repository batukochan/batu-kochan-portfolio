import styled from "styled-components";

export const StyledSkills = styled.section`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 96px 0px;
  @media (max-width: 768px) {
    padding: 64px 0px;
  }
`;
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;
export const SkillsItem01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  gap: 16px;
`;

export const SkillsItem02 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: inherit;
  background: ${({ theme }) => theme.colors.gray100};
  padding: 32px;
  border-radius: 24px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const SkillsUnit01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
