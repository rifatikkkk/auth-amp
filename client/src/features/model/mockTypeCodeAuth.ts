import type { ApiSuccessResponse } from "./mockTypeRequest";

export type VerifyOtpParams = {
  oldSuccessResponse: ApiSuccessResponse | null;
  otpCode: string;
};
