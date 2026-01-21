import { linkOptions } from "@tanstack/react-router";

export const NAV_LINKS = linkOptions([
  { to: "/", label: "Home", disabled: false },
  { to: "/books", label: "Books", disabled: false },
  { to: "/forms", label: "Forms", disabled: false },
]);
