import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiResponse, UserCredentials } from "../model";
import { loginUser } from "../api";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse, Error, UserCredentials>({
    mutationFn: loginUser,
    onSuccess: (data: ApiResponse) => {
      if (data.success) {
        queryClient.setQueryData(["user"], data);
      } else {
        console.log(data.error.message);
      }
    },
    onError: (error: Error) => {
      console.log("Серверная ошибка: ", error.message);
    },
  });
};
