import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthPage } from "../../pages/auth";
const queryClient = new QueryClient();
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

export const MainProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthPage />
    </QueryClientProvider>
  );
};
