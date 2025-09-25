import React from "react";
import "./style.css";
import { SignIn } from "../signIn";

export const AuthForm: React.FC = () => {
  return (
    <div className="auth_form">
      <SignIn />
    </div>
  );
};
