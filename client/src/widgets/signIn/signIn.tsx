import React from "react";
import "./style.css";
import { Logo } from "../../shared/ui/logo";
import { Title } from "../../shared/ui/title";
import { FormData } from "../../features/ui/formData";

export const SignIn: React.FC = () => {
  return (
    <div className="sign_in">
      <Logo />
      <Title text="Sign in to your account to continue" />
      <FormData />
    </div>
  );
};
