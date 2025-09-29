import React from "react";
import "./style.css";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/button";
import type { UserCredentials } from "../../model";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../hooks";

type Props = {
  className?: string;
};

export const FormData: React.FC<Props> = ({ className }) => {
  const loginMutation = useLoginMutation();

  const { handleSubmit, control, watch } = useForm<UserCredentials>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watchedValues = watch();

  const isFormValid = (): boolean => {
    const { email, password } = watchedValues;

    const isEmailValid = Boolean(
      email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
    const isPasswordValid = Boolean(password && password.length >= 6);

    return isEmailValid && isPasswordValid;
  };

  const onSubmit = async (data: UserCredentials) => {
    try {
      loginMutation.mutate(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className={`form_data ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="email"
        type="email"
        placeholder="Email"
        classNameBox="first_input"
        control={control}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        className="password_input"
        control={control}
      />
      <Button text="Log in" disabled={!isFormValid()} type="submit" />
    </form>
  );
};
