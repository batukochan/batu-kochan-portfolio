import React from "react";
import {
  StyledExperience,
  ExperienceContainer01,
  ExperienceContainer02,
  ExperienceItem01,
  ExperienceItem02,
  ExperienceUnit01,
  ExperienceUnit01A,
  ExperienceUnit02,
  ExperienceUnit03,
} from "./experience.styles";
import Tag from "../Tag/tags";
import Text from "../Text/text";
import { useTranslation } from "react-i18next";
import { Typography } from "../../theme/typography";
import { ExperienceProps } from "./types";

type Category = {
  title: string;
  points: string[];
};

type ExperienceObjectTypes = {
  company: string;
  role: string;
  date: string;
  categories?: Record<string, Category>;
};

const Experience: React.FC<ExperienceProps> = () => {
  const { t } = useTranslation();

  const experiences: ExperienceObjectTypes[] = [
    {
      company: t("experienceObj.tsk.company"),
      role: t("experienceObj.tsk.role"),
      date: t("experienceObj.tsk.date"),
      categories: {},
    },
    {
      company: t("experienceObj.feux.company"),
      role: t("experienceObj.feux.role"),
      date: t("experienceObj.feux.date"),
      categories: t("experienceObj.feux.categories", {
        returnObjects: true,
      }) as Record<string, Category>,
    },
    {
      company: t("experienceObj.kocsistem.company"),
      role: t("experienceObj.kocsistem.role"),
      date: t("experienceObj.kocsistem.date"),
      categories: t("experienceObj.kocsistem.categories", {
        returnObjects: true,
      }) as Record<string, Category>,
    },
  ];
  return (
    <StyledExperience id="experience">
      <ExperienceContainer01>
        <ExperienceItem01>
          <Tag>{t("experienceObj.tag")}</Tag>
          <Text
            desktopTypography={Typography.Subtitle}
            mobileTypography={Typography.Subtitle}
            color="gray600"
          >
            {t("experienceObj.description")}
          </Text>
        </ExperienceItem01>
      </ExperienceContainer01>
      <ExperienceContainer02>
        {experiences.map((experience, index) => (
          <ExperienceItem02 key={index}>
            <ExperienceUnit01>{experience.company}</ExperienceUnit01>
            <ExperienceUnit02>
              <Text
                desktopTypography={Typography.Subtitle}
                mobileTypography={Typography.Subtitle}
                color="gray900"
              >
                {experience.role}
              </Text>
              <ExperienceUnit01A>
                {experience.categories &&
                Object.keys(experience.categories).length > 0 ? (
                  Object.keys(experience.categories).map((categoryKey, idx) => {
                    const category = experience.categories![categoryKey];
                    return (
                      <React.Fragment key={idx}>
                        <Text
                          desktopTypography={Typography.Body1}
                          mobileTypography={Typography.Body2}
                          color="gray800"
                        >
                          {category.title}
                        </Text>
                        {category.points.map((point, pointIdx) => (
                          <Text
                            key={pointIdx}
                            desktopTypography={Typography.Body1}
                            mobileTypography={Typography.Body2}
                            color="gray600"
                            bullet
                          >
                            {point}
                          </Text>
                        ))}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <Text
                    desktopTypography={Typography.Body1}
                    mobileTypography={Typography.Body2}
                    color="gray600"
                    bullet
                  >
                    {t("militaryServiceDescription")}
                  </Text>
                )}
              </ExperienceUnit01A>
            </ExperienceUnit02>
            <ExperienceUnit03>
              <Text
                desktopTypography={Typography.Body2}
                mobileTypography={Typography.Body3}
                color="gray700"
              >
                {experience.date}
              </Text>
            </ExperienceUnit03>
          </ExperienceItem02>
        ))}
      </ExperienceContainer02>
    </StyledExperience>
  );
};

export default Experience;
