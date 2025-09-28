import React from "react";
import "./style.css";

type Props = {
  text: string;
};

export const Subtitle: React.FC<Props> = ({ text }) => {
  return <p className="subtitle">{text}</p>;
};
