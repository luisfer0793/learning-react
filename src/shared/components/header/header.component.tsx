import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="px-4 bg-slate-900 text-white">
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              to="/"
              className="block py-4 text-[15px]"
              activeProps={{ className: "text-amber-500" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/data-fetching"
              className="block py-4 text-[15px]"
              activeProps={{ className: "text-amber-500" }}
            >
              Data Fetching
            </Link>
          </li>
          <li>
            <Link
              to="/forms"
              className="block py-4 text-[15px]"
              activeProps={{ className: "text-amber-500" }}
            >
              Forms
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
