import type { AppRouter } from "@scoutspot/backend";
import { createTRPCReact } from "@trpc/react-query";

export const apiClient = createTRPCReact<AppRouter>();
