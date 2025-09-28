import React from "react";
import "./style.css";
import { Logo } from "../../shared/ui/logo";
import { Title } from "../../shared/ui/title";
import { Subtitle } from "../../shared/ui/subtitle";
import { FormDigitCode } from "../../features/ui/formDigitCode";

export const CodeAuth: React.FC = () => {
  return (
    <div className="code_auth">
      <Logo />
      <Title text="Two-Factor Authentication" />
      <Subtitle text="Enter the 6-digit code from the Google Authenticator app" />
      <FormDigitCode />
    </div>
  );
};
