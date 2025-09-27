import React from "react";
import "./style.css";
import { useController, type Control } from "react-hook-form";

type UserType = {
  email: string;
  password: string;
};

type Props = {
  name: keyof UserType;
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  control: Control<UserType>;
};

export const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  className,
  control,
}) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <input
      id={name}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      onChange={field.onChange}
    />
  );
};
