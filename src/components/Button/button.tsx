import React from "react";
import { StyledButton } from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined" | "text";
  isDownload?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  isDownload = false,
  href,
  children,
  ...props
}) => {
  return (
    <StyledButton
      as={href ? "a" : "button"}
      href={href}
      download={isDownload ? true : undefined}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
