import React, { useContext, useEffect, useState } from "react";
import NavPage from "./NavPage";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { sendAddToCardData, sendWishlistData } from "../../../routes/Root";

const Navbar = () => {
  const cartData = useContext(sendAddToCardData);
  const wishlistData = useContext(sendWishlistData);

  const NavPages = [
    { path: "/", name: "Home" },
    {
      path: "/statistics",
      name: "Statistics",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/request-product",
      name: "Request Product",
    },
  ];

  const location = useLocation();
  const [isHome, setHome] = useState(false);
  useEffect(() => {
    setHome(
      location.pathname === "/" ||
        location.pathname === "/smartphones" ||
        location.pathname === "/laptops" ||
        location.pathname === "/headphones" ||
        location.pathname === "/monitors"
    );
  }, [location]);

  //toggle navbar menu button
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`max-w-screen-xl mx-auto px-5 z-20 relative ${
        isHome ? "pr-12 pt-10 lg:px-12" : ""
      } `}
    >
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isOpen ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-32 p-2 shadow"
              >
                {NavPages.map((item, idx) => (
                  <NavPage key={idx} item={item}></NavPage>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          <Link
            className={`text-lg font-bold md:text-xl ${
              isHome ? "text-banner-content" : "text-base-content"
            }`}
            to="/"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavPages.map((item, idx) => (
              <NavPage key={idx} item={item} isHome={isHome}></NavPage>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="relative">
            <span className="z-10 inline-block absolute top-0 -right-3 bg-primary text-primary-content px-2 rounded-full border">
              {cartData.length}
            </span>
            <a className="btn btn-circle">
              <IoCartOutline className="w-6 h-6 fill-base-content" />
            </a>
          </div>
          <div className="relative">
            <span className="z-10 inline-block absolute top-0 -right-3 bg-primary text-primary-content px-2 rounded-full border">
              {wishlistData.length}
            </span>
            <a className="btn btn-circle">
              <GoHeart className="w-6 h-6 fill-base-content" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
