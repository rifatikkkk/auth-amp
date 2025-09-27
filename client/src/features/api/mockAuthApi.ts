import { constantsUser } from "../constants";
import type {
  ApiErrorResponse,
  ApiResponse,
  ApiSuccessResponse,
  UserCredentials,
} from "../model";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const loginUser = async (
  credentials: UserCredentials
): Promise<ApiResponse> => {
  await delay(3000);

  const { email, password } = credentials;

  if (!email || !password) {
    throw new Error("Необходимо заполнить все поля!");
  }

  try {
    if (email === "error@mail.ru") {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Сервер временно недоступен. Попробуйте позже!",
          code: 503,
        },
      };
      return errorResponse;
    }

    if (email === constantsUser.email && password === constantsUser.password) {
      const successResponse: ApiSuccessResponse = {
        success: true,
        data: {
          user: { id: 1, email: "user@mail.ru" },
          token: "example-token-12345",
          code: 200,
        },
      };

      return successResponse;
    } else {
      const errorResponse: ApiErrorResponse = {
        success: false,
        error: {
          message: "Неверный email или password!",
          code: 404,
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
        code: 500,
      },
    };
    return errorResponse;
  }
};
