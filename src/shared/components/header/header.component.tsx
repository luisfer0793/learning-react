import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "@/shared/components/header/header.utils";

export const Header = () => {
  return (
    <header className="px-4 bg-slate-900 text-white">
      <nav className="flex justify-between items-center">
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((navLink) => (
            <li key={navLink.to}>
              {navLink.disabled ? (
                <span className="block py-4 text-[15px] font-normal capitalize opacity-50 cursor-not-allowed">
                  {navLink.label + " (under construction)"}
                </span>
              ) : (
                <Link
                  {...navLink}
                  activeProps={{
                    className:
                      "text-lime-200 after:content-[' '] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lime-200",
                  }}
                  className="block py-4 text-[15px] font-normal capitalize relative"
                >
                  {navLink.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm bg-lime-200 px-4 py-2 rounded-sm text-black hover:bg-lime-300 cursor-pointer"
          >
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="text-sm bg-lime-200 px-4 py-2 rounded-sm text-black hover:bg-lime-300 cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};
