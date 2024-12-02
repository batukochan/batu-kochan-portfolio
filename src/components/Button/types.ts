export interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "text";
  onClick?: () => void;
  disabled?: boolean;
}
