import React from "react";
import "./style.css";

type Props = {
  text: string;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  type?: "button" | "submit";
};

export const Button: React.FC<Props> = ({
  text,
  disabled,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      className={`button ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
