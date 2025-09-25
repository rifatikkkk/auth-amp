import React from "react";
import "./style.css";

type Props = {
  text: string;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

export const Button: React.FC<Props> = ({
  text,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={`button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
