import React, { useEffect, useState } from "react";
import "./style.css";
import { SignIn } from "../signIn";
import { CodeAuth } from "../codeAuth";
import { useQueryClient } from "@tanstack/react-query";

export const AuthForm: React.FC = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(() => queryClient.getQueryData(["user"]));

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.query.queryKey[0] === "user") {
        setUser(event.query.state.data);
      }
    });

    return unsubscribe;
  }, [queryClient]);

  return <div className="auth_form">{!user ? <SignIn /> : <CodeAuth />}</div>;
};
