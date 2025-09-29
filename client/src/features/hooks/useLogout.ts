import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../api";
import type { ApiLogoutResponse } from "../model";

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation<ApiLogoutResponse, Error, void>({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.invalidateQueries();
    },
    onError: (error: Error) => {
      console.error("Logout error:", error);
      queryClient.setQueryData(["user"], null);
    },
  });
};
