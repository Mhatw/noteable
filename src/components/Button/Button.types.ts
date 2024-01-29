export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "github";
  size?: "xs" | "sm" | "md" | "lg";
  buttonRef?: React.RefObject<HTMLButtonElement>;
}
