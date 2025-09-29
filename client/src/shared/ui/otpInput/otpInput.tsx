import React, { type Ref } from "react";
import "./style.css";

type Props = {
  myKey: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref: Ref<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  className?: "error_input" | "";
  disabled?: boolean;
};

export const OtpInput: React.FC<Props> = ({
  myKey,
  value,
  onChange,
  ref,
  onKeyDown,
  className,
  disabled,
}) => {
  return (
    <input
      key={myKey}
      type="text"
      inputMode="numeric"
      value={value}
      className={`otp_input ${className}`}
      onChange={onChange}
      ref={ref}
      onKeyDown={onKeyDown}
      maxLength={1}
      disabled={disabled}
    />
  );
};
