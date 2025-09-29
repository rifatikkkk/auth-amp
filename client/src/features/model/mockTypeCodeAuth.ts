import type { ApiSuccessResponse } from "./mockTypeResponse";

export type VerifyOtpParams = {
  oldSuccessResponse: ApiSuccessResponse | null;
  otpCode: string;
};
