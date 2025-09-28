export const generateDigitCode = (): void => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  sessionStorage.setItem("mock-otp-code", code);
  console.log("session code: ", code);
};
