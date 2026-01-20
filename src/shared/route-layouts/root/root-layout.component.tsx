import { Outlet } from "@tanstack/react-router";
import { Header } from "@/shared/components/header/header.component";
import { Footer } from "@/shared/components/footer/footer.component";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
