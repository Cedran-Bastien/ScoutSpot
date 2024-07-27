import { createContext, ReactNode, useState } from "react";
import { Platform } from "react-native";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { TRPCClientError } from "@trpc/client";
import type { AppRouter } from "@/trpc/router";
import { apiClient } from "./trpc";

export const TRPCApiClientContext = createContext<typeof apiClient>(apiClient);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const handleApiError = async (error: Error) => {
    console.error("[TRPC Client]:", error);
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: handleApiError,
        }),
        queryCache: new QueryCache({
          onError: handleApiError,
        }),
      }),
  );

  const apiUrl = Platform.select({
    android: process.env.EXPO_PUBLIC_BACKEND_URL ?? `http://10.0.2.2:3000`,
    ios: process.env.EXPO_PUBLIC_BACKEND_URL ?? `http://localhost:3000`,
  });

  if (!apiUrl) {
    throw new Error("No api url found");
  }

  const [client] = useState(() =>
    apiClient.createClient({
      links: [
        httpBatchLink({
          url: apiUrl,
        }),
      ],
    }),
  );

  return (
    <apiClient.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <TRPCApiClientContext.Provider value={apiClient}>
          {children}
        </TRPCApiClientContext.Provider>
      </QueryClientProvider>
    </apiClient.Provider>
  );
};
