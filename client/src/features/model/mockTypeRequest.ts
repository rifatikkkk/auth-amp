export type ApiErrorResponse = {
  success: false;
  error: {
    message: string;
    code?: number;
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
    code?: number;
  };
};

export type ApiResponse = ApiErrorResponse | ApiSuccessResponse;
