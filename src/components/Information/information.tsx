import React from "react";
import { useTranslation } from "react-i18next";
import {
  InformationContainer,
  InformationItem,
  ImageWrapper,
  ContentWrapper,
  QuickInfoList,
  QuickInfoItem,
} from "./information.styles";
import { InformationProps } from "./types";
import Text from "../Text/text";
import Tag from "../Tag/tags";
import { Typography } from "../../theme/typography";
import InformationPhoto from "../../assets/infoPhoto.jpeg";

const Information: React.FC<InformationProps> = () => {
  const { t } = useTranslation();
  const infoDesc = t("infoDesc", { returnObjects: true }) as string[];
  const quickInfo = t("quickInfo", { returnObjects: true }) as string[];

  return (
    <InformationContainer>
      <Tag> {t("about")}</Tag>
      <InformationItem>
        <ImageWrapper>
          <img src={InformationPhoto} alt="Personal" />
        </ImageWrapper>
        <ContentWrapper>
          <Text
            desktopTypography={Typography.Heading3Desktop}
            mobileTypography={Typography.Heading3Mobile}
            color="gray900"
          >
            {t("infoTitle")}
          </Text>
          {infoDesc.map((paragraph: string, index: number) => (
            <Text
              key={index}
              desktopTypography={Typography.Body1}
              mobileTypography={Typography.Body2}
              color="gray600"
            >
              {paragraph}
            </Text>
          ))}

          <QuickInfoList>
            {quickInfo.map((info, index) => (
              <QuickInfoItem key={index}>
                <Text
                  desktopTypography={Typography.Body2}
                  mobileTypography={Typography.Body3}
                  color="gray600"
                  bullet
                >
                  {info}
                </Text>
              </QuickInfoItem>
            ))}
          </QuickInfoList>
        </ContentWrapper>
      </InformationItem>
    </InformationContainer>
  );
};

export default Information;
