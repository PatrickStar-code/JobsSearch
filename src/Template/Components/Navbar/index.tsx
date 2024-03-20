import { useState } from "react";
import { act } from "react-dom/test-utils";
import { Link } from "react-router-dom";

export function Navbar() {
  const links = [
    {
      name: "Home",
    },
    {
      name: "Jobs",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
  ];

  const [active, setActiveLink] = useState<String>("Home");
  const [isloged, setisloged] = useState<boolean>(false);

  const handleActiveLink = (name: String) => {
    setActiveLink(name);
  };

  const handleSetLogin = () => {
    setisloged(!isloged);
  }

  return (
    
    <header className="flex flex-wrap sm:justify-start   sm:flex-nowrap z-50 w-full bg-white text-sm py-4 ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-x-2 text-xl font-semibold "
            to="/"
            onClick={() => handleActiveLink("Home")}
          >
            <img
              className="w-10 h-auto"
              src="../assets/img/logo/logo-short.png"
              alt="Logo"
            />
            Brand
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-collapse="#navbar-image-and-text-2"
              aria-controls="navbar-image-and-text-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-2"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {links.map((link) => (
              <>
                <Link
                  to={link.name === "Home" ? "/" : link.name}
                  className={`font-medium cursor-pointer ${
                    active === link.name
                      ? "text-blue-500  "
                      : " text-gray-600 hover:text-gray-400 "
                  }`}
                  onClick={() => handleActiveLink(link.name)}
                >
                  {link.name.toUpperCase()}
                </Link>
              </>
            ))}
            <div className="flex sm:justify-start gap-4">
              {!isloged && (
                <>
                  <button
                    type="button"
                    className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                  >
                    LOGIN
                  </button>
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    REGISTER
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
    
  );
}
