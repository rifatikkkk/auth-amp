import React from "react";
import "./style.css";
import logoIcon from "../../assets/logo.svg";
import titleIcon from "../../assets/textLogo.svg";

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logoIcon} width={24} height={24} alt="logo_icon" />
      <img src={titleIcon} width={65} height={24} alt="title_icon" />
    </div>
  );
};
