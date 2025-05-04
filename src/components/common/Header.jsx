import { navlink } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="backdrop-blur-md bg-white/80 shadow-xl fixed w-full z-50 border-b border-indigo-400">
        <div className="container mx-auto flex items-center px-4 py-3 md:p-4 justify-between md:justify-center relative">
          <button
            className="md:hidden text-indigo-700 focus:outline-none hover:text-indigo-900 transition-transform duration-300 ease-in-out transform hover:scale-110 absolute left-4"
            onClick={() => setResponsive(!responsive)}
            aria-label="Toggle menu"
          >
            {responsive ? (
              <Close className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          <nav
            className={`${
              responsive ? "block" : "hidden"
            } md:flex space-x-10 text-indigo-700 font-semibold tracking-wide uppercase`}
          >
            {navlink.map((value, i) => {
              const isActive = location.pathname === value.url;
              return (
                <Link
                  to={value.url}
                  key={i}
                  data-aos="zoom-in-left"
                  className={`block py-2 px-5 rounded-lg transition-all duration-300 ease-in-out relative group ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "hover:bg-indigo-100 hover:text-indigo-900"
                  }`}
                  onClick={() => setResponsive(false)}
                >
                  {value.text}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block w-7 h-7 absolute right-4"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
