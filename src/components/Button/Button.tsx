import React from "react";
import { ButtonProps } from "./Button.types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, className, disabled, size, type, variant } = props;
  const { isLoading, buttonRef } = props;

  const handleClick = () => {
    onClick?.();
  };

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-primaryC-600 hover:bg-primaryC-700 text-white font-medium ";
      case "secondary":
        return "bg-note-gray5 hover:bg-note-gray4 text-note-gray2 font-bold ";
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white font-medium ";
      case "github":
        return "bg-primaryBlack-800 hover:bg-primaryBlack-900 text-white font-medium ";
      default:
        return "bg-primaryC-600 hover:bg-primaryC-700 text-white font-medium ";
    }
  };

  const getSize = () => {
    switch (size) {
      case "xs":
        return "px-3 py-1 text-xs";
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
    return disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";
  };

  return (
    <button
      ref={buttonRef}
      disabled={disabled || isLoading}
      onClick={handleClick}
      className={cn(
        `${getVariant()} ${getSize()} ${isDisabled()} rounded-lg text-center flex items-center justify-center ${className}`
      )}
      type={getType()}
    >
      {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
