import { createRootRouteWithContext } from "@tanstack/react-router";
import { RootLayout } from "@/shared/route-layouts/root/root-layout.component";
import { QueryClient } from "@tanstack/react-query";

type RootRouteContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: RootLayout,
});
