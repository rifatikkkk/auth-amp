export type ApiErrorResponse = {
  success: false;
  error: {
    message: string;
    codeRes?: number;
  };
};

export type ApiSuccessResponse = {
  success: true;
  data: {
    user: {
      id: number;
      email: string;
    };
    token: string;
    codeRes?: number;
    verifyOtp: boolean;
  };
};

export type ApiResponse = ApiErrorResponse | ApiSuccessResponse;
