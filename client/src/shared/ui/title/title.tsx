import React from "react";
import "./style.css";

type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
  return <p className="title">{text}</p>;
};
