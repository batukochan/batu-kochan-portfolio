import React from "react";
import { StyledTag } from "./tags.styles";
import { TagProps } from "./types";

const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
  return <StyledTag variant={variant}>{children}</StyledTag>;
};

export default Tag;
