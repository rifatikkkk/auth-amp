import React from "react";
import "./style.css";

type Props = {
  text: string;
  className?: string;
};

export const ErrorMessage: React.FC<Props> = ({ text, className }) => {
  return <p className={`error_message ${className}`}>{text}</p>;
};
