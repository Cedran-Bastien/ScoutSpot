import { query } from "./query";
import { router } from "@/trpc/init";

export const appRouter = router(query);

export type AppRouter = typeof appRouter;
