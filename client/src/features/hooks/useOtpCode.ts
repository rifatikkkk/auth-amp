import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiResponse, VerifyOtpParams } from "../model";
import { verifyOtpUser } from "../api";

export const useOtpCodeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse, Error, VerifyOtpParams>({
    mutationFn: verifyOtpUser,
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
