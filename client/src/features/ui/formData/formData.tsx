import React from "react";
import "./style.css";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/button";
import type { ApiResponse, UserCredentials } from "../../model";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api";

type Props = {
  className?: string;
};

export const FormData: React.FC<Props> = ({ className }) => {
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

  const loginMutation = useMutation<ApiResponse, Error, UserCredentials>({
    mutationFn: loginUser,
    onSuccess: (data: ApiResponse) => {
      if (data.success) {
        console.log("Успешная авторизация!");
        console.log(data.data.user.email);
      } else {
        console.log(data.error.message);
      }
    },
    onError: (error: Error) => {
      console.log("Серверная ошибка: ", error.message);
    },
  });

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
        className="first_input"
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
