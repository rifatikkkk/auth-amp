import React from "react";
import "./style.css";
import { Input } from "../../shared/ui/input";
import { Button } from "../../shared/ui/button";

type Props = {
  className?: string;
};

export const FormData: React.FC<Props> = ({ className }) => {
  return (
    <form className="form_data">
      <Input
        name="email"
        type="email"
        placeholder="Email"
        className="first_input"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        className="password_input"
      />
      <Button text="Log in" disabled={false} />
    </form>
  );
};
