import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/features/authentication/pages/login/login-page.component";

export const Route = createFileRoute("/forms")({
  component: LoginPage,
});
