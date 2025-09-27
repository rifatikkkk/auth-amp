import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthPage } from "../../pages/auth";
const queryClient = new QueryClient();

export const MainProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthPage />
    </QueryClientProvider>
  );
};
