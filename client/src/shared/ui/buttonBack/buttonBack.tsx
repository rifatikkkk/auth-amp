import React from "react";
import "./style.css";
import backIcon from "../../assets/back.svg";

type Props = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  type?: "button" | "submit";
};

export const ButtonBack: React.FC<Props> = ({ onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`back_button ${className}`}
    >
      <img src={backIcon} alt="back_icon" />
    </button>
  );
};
