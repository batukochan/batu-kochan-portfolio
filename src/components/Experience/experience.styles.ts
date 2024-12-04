import styled from "styled-components";

export const StyledExperience = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.gray50};
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 96px 0px;
  border-radius: 48px;
  @media (max-width: 768px) {
    padding: 64px 0px;
  }
`;
export const ExperienceContainer01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const ExperienceContainer02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;
export const ExperienceItem01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const ExperienceItem02 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1096px;
  background: ${({ theme }) => theme.colors.gray100};
  padding: 32px;
  border-radius: 24px;
  @media (max-width: 579px) {
    width: 240px;
  }
  @media (min-width: 580px) and (max-width: 768px) {
    width: 460px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const ExperienceUnit01 = styled.div`
  max-width: 96px;
  text-align: start;
`;
export const ExperienceUnit01A = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 548px;

  @media (max-width: 579px) {
    flex-wrap: wrap;
    width: 240px;
  }

  @media (min-width: 580px) and (max-width: 768px) {
    width: 460px;
  }
`;
export const ExperienceUnit02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const ExperienceUnit03 = styled.div`
  width: 248px;
  text-align: start;

  @media (max-width: 768px) {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 120px;

    p {
      justify-content: end;
    }
  }
`;
