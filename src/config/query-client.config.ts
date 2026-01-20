import { QueryClient } from "@tanstack/react-query";

const MINUTES = 5;
const MILLISECONDS = 60 * 1000;
const STALE_TIME = MINUTES * MILLISECONDS;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
  },
});
