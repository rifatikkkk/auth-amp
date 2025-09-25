import React from "react";
import "./style.css";
import { AuthForm } from "../../../widgets/authForm";

export const AuthPage: React.FC = () => {
  return (
    <div className="auth_page">
      <AuthForm />
    </div>
  );
};
