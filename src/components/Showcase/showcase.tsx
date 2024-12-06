import React from "react";
import {
  ShowcaseContainer,
  TextSection,
  TextContainer,
  InfoSection,
  IconWrapper,
  AvatarWrapper,
  SocialIcons,
} from "./showcase.styles";
import { ShowcaseProps } from "./types";
import Text from "../Text/text.tsx";
import {
  GithubIcon,
  LocationIcon,
  LinkdinIcon,
  PhoneIcon,
  InboxIcon,
} from "../../assets/icons";
import { Typography } from "../../theme/typography.ts";
import { useTranslation } from "react-i18next";

const Showcase: React.FC<ShowcaseProps> = ({
  avatar,
  name,
  description,
  location,
}) => {
  const { t } = useTranslation();

  return (
    <ShowcaseContainer id="showcase">
      <TextSection>
        <TextContainer>
          <Text
            desktoptypography={Typography.Heading1Desktop}
            mobiletypography={Typography.Heading1Mobile}
            color="gray900"
          >
            {t("showcaseTitle")} {name}
          </Text>
          <Text
            desktoptypography={Typography.Body1}
            mobiletypography={Typography.Body2}
            color="gray600"
          >
            {description}
          </Text>
        </TextContainer>

        <InfoSection>
          <Text
            desktoptypography={Typography.Body1}
            mobiletypography={Typography.Body2}
            color="gray600"
            as="div"
          >
            <IconWrapper>
              <LocationIcon />
            </IconWrapper>
            {location}
          </Text>
          <Text
            desktoptypography={Typography.Body1}
            mobiletypography={Typography.Body2}
            color="gray600"
            bullet
          >
            {t("showcaseBulletDesc")}
          </Text>
        </InfoSection>
        <SocialIcons>
          <a
            href="https://github.com/batukochan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github profile"
          >
            <GithubIcon />
          </a>
          <a href="tel:+905340326426" aria-label="phone number">
            <PhoneIcon />
          </a>
          <a href="mailto:batukochan@icloud.com" aria-label="email address">
            <InboxIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/batukochan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkdinIcon />
          </a>
        </SocialIcons>
      </TextSection>
      <AvatarWrapper>
        <img src={avatar} alt={name} loading="lazy" />
      </AvatarWrapper>
    </ShowcaseContainer>
  );
};

export default Showcase;
