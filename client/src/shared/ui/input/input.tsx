import React from "react";
import "./style.css";
import { useController, type Control } from "react-hook-form";
import emailLogo from "../../assets/user.svg";
import passwordLogo from "../../assets/password.svg";

type UserType = {
  email: string;
  password: string;
};

type Props = {
  name: keyof UserType;
  type?: "email" | "password";
  placeholder?: string;
  classNameBox?: string;
  className?: string;
  control: Control<UserType>;
};

export const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  classNameBox,
  className,
  control,
}) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <div className={`input_box ${classNameBox}`}>
      <input
        id={name}
        type={type}
        className={`input ${className}`}
        placeholder={placeholder}
        onChange={field.onChange}
      />
      <img
        className="input_icon"
        src={type === "email" ? emailLogo : passwordLogo}
        alt="passwordLogo"
      />
    </div>
  );
};
