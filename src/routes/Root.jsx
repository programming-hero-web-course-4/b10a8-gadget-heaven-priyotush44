import React, { createContext, useState } from "react";
import Navbar from "../components/header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export const addToCardContext = createContext(null);
export const sendAddToCardData = createContext(null);
export const wishlistContext = createContext(null);
export const sendWishlistData = createContext(null);

const Root = () => {
  const [cartData, setCartData] = useState([]);
  const getAddToCartData = (data) => {
    const newArr = [...cartData, data];
    setCartData(newArr);
  };

  const [wishlistData, setWishlistData] = useState([]);

  const getWishlistData = (data) => {
    const newArr = [...wishlistData, data];
    setWishlistData(newArr);
  };

  return (
    <sendWishlistData.Provider value={wishlistData}>
      <wishlistContext.Provider value={getWishlistData}>
        <sendAddToCardData.Provider value={cartData}>
          <addToCardContext.Provider value={getAddToCartData}>
            <div>
              <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          </addToCardContext.Provider>
        </sendAddToCardData.Provider>
      </wishlistContext.Provider>
    </sendWishlistData.Provider>
  );
};

export default Root;
