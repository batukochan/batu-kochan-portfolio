import React from "react";
import {
  StyledFooter,
  FooterContainer,
  FooterItem01,
  FooterUnit01,
  PreFooter,
} from "./footer.styles";
import { FooterProps } from "./types";
import Tag from "../Tag/tags";
import Text from "../Text/text";
import {
  CopyIcon,
  CopyrightIcon,
  GithubIcon,
  InboxIcon,
  LinkdinIcon,
  PhoneIcon,
} from "../../assets/icons";
import { useTranslation } from "react-i18next";
import { Typography } from "../../theme/typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(t("copiedSuccess"), {
          autoClose: 2000,
        });
      })
      .catch(() => {
        toast.error(t("copiedError"), {
          autoClose: 2000,
        });
      });
  };
  return (
    <StyledFooter id="contact">
      <ToastContainer />
      <FooterContainer>
        <FooterItem01 className="c-item-01">
          <Tag>{t("footerTag")}</Tag>
          <Text
            desktopTypography={Typography.Subtitle}
            mobileTypography={Typography.Subtitle}
            color="gray600"
          >
            {t("footerInfo")}
          </Text>
        </FooterItem01>

        <FooterItem01 className="c-item-02">
          <FooterUnit01>
            <a href="mailto:batukochan@icloud.com">
              <InboxIcon />
            </a>
            <Text
              desktopTypography={Typography.Heading2Desktop}
              mobileTypography={Typography.Heading3Mobile}
            >
              batukochan@icloud.com
            </Text>
            <CopyIcon
              onClick={() => copyToClipboard("batukochan@icloud.com")}
            />
          </FooterUnit01>
          <FooterUnit01>
            <a href="tel:+905340326426">
              <PhoneIcon />
            </a>
            <Text
              desktopTypography={Typography.Heading2Desktop}
              mobileTypography={Typography.Heading3Mobile}
            >
              05340326426
            </Text>
            <CopyIcon onClick={() => copyToClipboard("05340326426")} />
          </FooterUnit01>
        </FooterItem01>

        <FooterItem01 className="c-item-03">
          <Text
            desktopTypography={Typography.Body1}
            mobileTypography={Typography.Body2}
            color="gray600"
          >
            {t("footerIconsDesc")}
          </Text>

          <FooterUnit01>
            <a
              href="https://github.com/batukochan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/batukochan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkdinIcon />
            </a>
          </FooterUnit01>
        </FooterItem01>
      </FooterContainer>
      <PreFooter className="c-item-03">
        <CopyrightIcon />
        <Text
          desktopTypography={Typography.Body2}
          mobileTypography={Typography.Body3}
          color="gray600"
        >
          {t("footerCopywrite")}
        </Text>
      </PreFooter>
    </StyledFooter>
  );
};

export default Footer;
