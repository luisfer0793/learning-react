import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Root Layout</h1>
      <Outlet />
    </div>
  );
};
