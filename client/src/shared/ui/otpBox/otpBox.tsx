import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { OtpInput } from "../otpInput";
import { useOtpCodeMutation } from "../../../features/hooks";
import { useQueryClient } from "@tanstack/react-query";
import type { ApiSuccessResponse } from "../../../features/model";
import { ErrorMessage } from "../errorMessage";

type Props = {
  length?: number;
};

export const OtpBox: React.FC<Props> = ({ length = 6 }) => {
  const otpCodeMutation = useOtpCodeMutation();
  const user = useQueryClient().getQueryData<ApiSuccessResponse>(["user"]);

  const ref = useRef<HTMLInputElement[]>([]);
  const [code, setCode] = useState<Array<string>>(new Array(length).fill(""));

  const [codeRes, setCodeRes] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      const newArr = [...code];
      const char = value.slice(-1);

      const firstEmptyIndex = newArr.findIndex((item) => item === "");

      if (firstEmptyIndex !== -1 && firstEmptyIndex < index) {
        newArr[firstEmptyIndex] = char;
        setCode(newArr);

        if (firstEmptyIndex < newArr.length - 1) {
          setTimeout(() => {
            ref.current[firstEmptyIndex + 1]?.focus();
          }, 0);
        }
      } else {
        newArr[index] = char;
        setCode(newArr);

        if (index < newArr.length - 1) {
          setTimeout(() => {
            ref.current[index + 1]?.focus();
          }, 0);
        }
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      e.preventDefault();
      const newArr = [...code];
      if (code[index]) {
        newArr[index] = "";
        setCode(newArr);
      } else {
        if (index > 0) {
          ref.current[index - 1]?.focus();
          newArr[index - 1] = "";
          setCode(newArr);
        }
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      ref.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < code.length - 1) {
      ref.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    const otpString = code.join("");
    if (otpString.length === 6 && user) {
      console.log("Current code string: ", otpString);
      otpCodeMutation.mutate({
        oldSuccessResponse: user,
        otpCode: otpString,
      });
    }
    if (otpString.length < 6) {
      setCodeRes(0);
      setErrorMessage("");
    }
  }, [code]);

  useEffect(() => {
    if (otpCodeMutation.data) {
      if (!otpCodeMutation.data.success) {
        const errorCode = otpCodeMutation.data.error.codeRes;
        const errorMessage = otpCodeMutation.data.error.message;
        setCodeRes(otpCodeMutation.data.error.codeRes);

        if (errorCode === 404) setErrorMessage(errorMessage);
        else setErrorMessage("");
      } else {
        setCodeRes(otpCodeMutation.data.data.codeRes);
      }
    }
  }, [otpCodeMutation.data]);

  return (
    <div className="otp_form">
      <div className="otp_box">
        {code.map((item, index) => {
          return (
            <OtpInput
              key={index}
              myKey={index}
              value={item}
              onChange={(e) => handleChange(e, index)}
              ref={(el) => {
                if (el) {
                  ref.current[index] = el;
                }
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={
                codeRes === 404 && code.length >= 6 ? "error_input" : ""
              }
              disabled={codeRes === 200}
            />
          );
        })}
      </div>
      {codeRes === 404 && <ErrorMessage text={errorMessage} />}
    </div>
  );
};
