import { generateDigitCode } from "../../utils";
import { constantsErrorEmail, constantsUser } from "../constants";
import type {
  ApiErrorResponse,
  ApiLogoutResponse,
  ApiResponse,
  ApiSuccessResponse,
  UserCredentials,
  VerifyOtpParams,
} from "../model";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const loginUser = async (
  credentials: UserCredentials
): Promise<ApiResponse> => {
  await delay(3000);

  const { email, password } = credentials;

  try {
    if (email === constantsErrorEmail) {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Сервер временно недоступен. Попробуйте позже!",
          codeRes: 503,
        },
      };
      return errorResponse;
    }

    if (email === constantsUser.email && password === constantsUser.password) {
      const successResponse: ApiSuccessResponse = {
        success: true,
        data: {
          user: { id: 1, email: constantsUser.email },
          token: "example-token-12345",
          codeRes: 200,
          verifyOtp: false,
        },
      };

      generateDigitCode();

      return successResponse;
    } else {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Неверный email или password!",
          codeRes: 404,
        },
      };

      return errorResponse;
    }
  } catch (error) {
    console.error("Неожиданная ошибка при авторизации: ", error);
    const errorResponse: ApiErrorResponse = {
      success: false,
      error: {
        message: "Произошла непредвиденная ошибка при авторизации",
        codeRes: 500,
      },
    };
    return errorResponse;
  }
};

export const verifyOtpUser = async (
  params: VerifyOtpParams
): Promise<ApiResponse> => {
  await delay(3000);

  try {
    const sessionCode = sessionStorage.getItem("mock-otp-code");

    if (!sessionCode) {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Введите код!",
          codeRes: 400,
        },
      };
      return errorResponse;
    }

    if (!params.oldSuccessResponse) {
      return {
        success: false,
        error: { message: "Пользователь не найден!", codeRes: 400 },
      };
    }

    if (sessionCode === params.otpCode) {
      if (params.oldSuccessResponse?.success) {
        const updateSuccessResponse: ApiSuccessResponse = {
          ...params.oldSuccessResponse,
          data: {
            ...params.oldSuccessResponse.data,
            verifyOtp: true,
          },
        };
        console.log(updateSuccessResponse);
        return updateSuccessResponse;
      }
      return {
        success: false,
        error: {
          message: "Невалидный oldSuccessResponse",
          codeRes: 400,
        },
      };
    } else {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Inavlid code",
          codeRes: 404,
        },
      };

      return errorResponse;
    }
  } catch (error) {
    console.error("Неожиданная ошибка при авторизации: ", error);
    const errorResponse: ApiErrorResponse = {
      success: false,
      error: {
        message: "Произошла непредвиденная ошибка при авторизации",
        codeRes: 500,
      },
    };
    return errorResponse;
  }
};

export const logoutUser = async (): Promise<ApiLogoutResponse> => {
  await delay(1000);

  return {
    success: true,
    message: "Выход из системы выполнен успешно!",
  };
};
