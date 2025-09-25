import React from "react";
import "./style.css";
// import type { Control } from "react-hook-form";

type Props = {
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  //   control: Control<any>;
  className?: string;
};

export const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  //   control,
  className,
}) => {
  return (
    <input
      id={name}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
    />
  );
};
