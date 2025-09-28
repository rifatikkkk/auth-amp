import React, { type Ref } from "react";
import "./style.css";

type Props = {
  myKey: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: Ref<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
};

export const OtpInput: React.FC<Props> = ({
  myKey,
  value,
  onChange,
  ref,
  onKeyDown,
}) => {
  return (
    <input
      key={myKey}
      type="text"
      inputMode="numeric"
      value={value}
      className="otp_input"
      onChange={onChange}
      ref={ref}
      onKeyDown={onKeyDown}
      maxLength={1}
    />
  );
};
