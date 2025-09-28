import React, { useEffect, useState } from "react";
import "./style.css";
import { OtpBox } from "../../../shared/ui/otpBox";
import { Button } from "../../../shared/ui/button";
import { Timer } from "../../../shared/ui/timer";
import { generateDigitCode } from "../../../utils";
import { useQueryClient } from "@tanstack/react-query";
import { type ApiSuccessResponse } from "../../model";

export const FormDigitCode: React.FC = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<ApiSuccessResponse | undefined>(() =>
    queryClient.getQueryData<ApiSuccessResponse>(["user"])
  );
  const [verifyOtp, setVerifyOtp] = useState(user?.data.verifyOtp);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.query.queryKey[0] === "user") {
        const newUser = event.query.state.data as
          | ApiSuccessResponse
          | undefined;
        setUser(newUser);

        if (newUser?.data.verifyOtp !== verifyOtp) {
          setVerifyOtp(newUser?.data.verifyOtp);
        }
      }
    });

    return unsubscribe;
  }, [queryClient, verifyOtp]);

  const continueHandle = () => {
    console.log("You click continue button!");
  };

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const resentOtp = () => {
    generateDigitCode();
    setMinutes(0);
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="form_digit_code">
      <OtpBox />

      {verifyOtp ? (
        <Button
          text="Continue"
          disabled={false}
          type="button"
          onClick={continueHandle}
        />
      ) : seconds > 0 || minutes > 0 ? (
        <Timer seconds={seconds} minutes={minutes} />
      ) : (
        <Button
          text="Get new"
          disabled={false}
          type="button"
          onClick={resentOtp}
        />
      )}
    </div>
  );
};
