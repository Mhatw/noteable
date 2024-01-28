import React from "react";
import { ButtonProps } from "./Button.types";
import { ReloadIcon } from "@radix-ui/react-icons";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, className, disabled, size, type, variant } = props;
  const { isLoading } = props;

  const handleClick = () => {
    onClick?.();
  };

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-primaryC-600 hover:bg-primaryC-700 focus:ring-2 focus:outline-none focus:ring-primaryC-300";
      case "secondary":
        return "bg-primaryC-200 hover:bg-primaryC-300 focus:ring-2 focus:outline-none focus:ring-primaryC-300";
      case "danger":
        return "bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300";
      case "github":
        return "bg-primaryBlack-800 hover:bg-primaryBlack-900 focus:ring-2 focus:outline-none focus:ring-primaryBlack-300";
      default:
        return "bg-primaryC-600 hover:bg-primaryC-700 focus:ring-2 focus:outline-none focus:ring-primaryC-300";
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "px-5 py-2.5 text-sm";
      case "md":
        return "px-6 py-3 text-sm";
      case "lg":
        return "px-8 py-4 text-base";
      default:
        return "px-6 py-3 text-sm";
    }
  };

  const getType = () => {
    switch (type) {
      case "submit":
        return "submit";
      case "reset":
        return "reset";
      default:
        return "button";
    }
  };

  const isDisabled = () => {
    return disabled || isLoading ? "opacity-80 cursor-not-allowed" : "";
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${getVariant()} ${getSize()} ${isDisabled()} ${className} text-white font-medium rounded-lg text-center flex items-center justify-center`}
      type={getType()}
    >
      {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
