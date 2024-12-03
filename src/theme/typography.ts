import * as CSS from "csstype";
import fonts from "./fonts";

const { inter } = fonts;

export enum Typography {
  Heading1Desktop = "Heading1Desktop",
  Heading1Tablet = "Heading1Tablet",
  Heading1Mobile = "Heading1Mobile",
  Heading2Desktop = "Heading2Desktop",
  Heading2Tablet = "Heading2Tablet",
  Heading2Mobile = "Heading2Mobile",
  Heading3Desktop = "Heading3Desktop",
  Heading3Tablet = "Heading3Tablet",
  Heading3Mobile = "Heading3Mobile",
  Subtitle = "Subtitle",
  Body1 = "Body1",
  Body2 = "Body2",
  Body3 = "Body3",
}

export type TypographyStyles = {
  [key in Typography]: CSS.Properties & {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;
  };
};

const typography: TypographyStyles = {
  [Typography.Heading1Desktop]: {
    fontFamily: inter,
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "72px",
    letterSpacing: "0px",
  },
  [Typography.Heading1Tablet]: {
    fontFamily: inter,
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "60px",
    letterSpacing: "0px",
  },
  [Typography.Heading1Mobile]: {
    fontFamily: inter,
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "50px",
    letterSpacing: "0px",
  },
  [Typography.Heading2Desktop]: {
    fontFamily: inter,
    fontSize: "38px",
    fontWeight: 600,
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  [Typography.Heading2Tablet]: {
    fontFamily: inter,
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  [Typography.Heading2Mobile]: {
    fontFamily: inter,
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  [Typography.Heading3Desktop]: {
    fontFamily: inter,
    fontSize: "30px",
    fontWeight: 600,
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  [Typography.Heading3Tablet]: {
    fontFamily: inter,
    fontSize: "26px",
    fontWeight: 600,
    lineHeight: "32px",
    letterSpacing: "0px",
  },
  [Typography.Heading3Mobile]: {
    fontFamily: inter,
    fontSize: "26px",
    fontWeight: 600,
    lineHeight: "32px",
    letterSpacing: "0px",
  },
  [Typography.Subtitle]: {
    fontFamily: inter,
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0px",
  },
  [Typography.Body1]: {
    fontFamily: inter,
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0px",
  },
  [Typography.Body2]: {
    fontFamily: inter,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  [Typography.Body3]: {
    fontFamily: inter,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0px",
  },
};

export default typography;
