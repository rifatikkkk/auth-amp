import React from "react";
import "./style.css";

type Props = {
  seconds: number;
  minutes: number;
};

export const Timer: React.FC<Props> = ({ seconds, minutes }) => {
  return (
    <p className="timer_text">{`Get a new code in 
        ${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`}</p>
  );
};
