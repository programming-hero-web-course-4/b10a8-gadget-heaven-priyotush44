import React from "react";
import { NavLink } from "react-router-dom";

const NavPage = ({ item, isHome }) => {
  const { path, name } = item;
  return (
    <>
      <li>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `btn text-base ${
              isActive
                ? `border-none shadow-none underline ${
                    isHome ? "text-banner-content" : "text-primary"
                  }  bg-transparent hover:bg-transparent hover:border-primary`
                : `bg-transparent border-none shadow-none ${
                    isHome
                      ? "text-banner-content hover:text-banner-content/70"
                      : "text-base-content-secondary hover:text-base-content"
                  } bg-none hover:bg-transparent `
            }`
          }
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavPage;
