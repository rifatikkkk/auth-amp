import React from "react";
import "./style.css";
import { ButtonBack } from "../../../shared/ui/buttonBack";
import { useLogout } from "../../hooks";

export const LogoutButton: React.FC = () => {
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutate();
    console.log("logout");
  };
  return <ButtonBack className="absolute" onClick={handleLogout} />;
};
