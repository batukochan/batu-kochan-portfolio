import React from "react";
import {
  StyledSkills,
  SkillsContainer,
  SkillsItem01,
  SkillsItem02,
  SkillsUnit01,
} from "./skills.styles";
import { SkillsProps } from "./types";
import Tag from "../Tag/tags";
import Text from "../Text/text";
import {
  GitIcon,
  JavascriptIcon,
  NextJsIcon,
  ReactIcon,
  SassIcon,
  SocketIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../../assets/icons";
import { useTranslation } from "react-i18next";
import { Typography } from "../../theme/typography";

const Skills: React.FC<SkillsProps> = () => {
  const { t } = useTranslation();
  const skillsData = [
    { icon: <JavascriptIcon />, name: "JavaScript" },
    { icon: <TypescriptIcon />, name: "TypeScript" },
    { icon: <ReactIcon />, name: "React.js" },
    { icon: <NextJsIcon />, name: "Next.js" },
    { icon: <SocketIcon />, name: "Socket.io" },
    { icon: <GitIcon />, name: "Git" },
    { icon: <SassIcon />, name: "Sass" },
    { icon: <TailwindIcon />, name: "Tailwind" },
  ];
  return (
    <StyledSkills id="skills">
      <SkillsContainer>
        <SkillsItem01>
          <Tag>{t("skillsTag")}</Tag>
          <Text
            desktoptypography={Typography.Subtitle}
            mobiletypography={Typography.Subtitle}
            color="gray600"
          >
            {t("skillsDesc")}
          </Text>
        </SkillsItem01>
        <SkillsItem02>
          {skillsData.map((skill, index) => (
            <SkillsUnit01 key={index}>
              {skill.icon}
              <Text
                desktoptypography={Typography.Body2}
                mobiletypography={Typography.Body3}
                color="gray600"
              >
                {skill.name}
              </Text>
            </SkillsUnit01>
          ))}
        </SkillsItem02>
      </SkillsContainer>
    </StyledSkills>
  );
};

export default Skills;
