import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/config/router.config";

export const App = () => {
  return <RouterProvider router={router} />;
};
