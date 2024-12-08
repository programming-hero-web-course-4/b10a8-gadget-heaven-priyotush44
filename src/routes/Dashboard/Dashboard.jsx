import React, { useState } from "react";
import Cart from "./Cart";
import WishList from "./WishList";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState("cart");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Dashboard - Gadget Heaven</title>
        </Helmet>
        <div className="bg-primary py-8 px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-banner-content">
              Dashboard
            </h2>
            <p className="max-w-xl mx-auto text-base font-normal text-banner-content mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <button
              onClick={() => setActiveBtn("cart")}
              className={`px-8 py-1 rounded-full text-base font-medium hover:opacity-80 ${
                activeBtn === "cart"
                  ? "bg-base-100 border border-primary text-primary"
                  : "bg-transparent border border-base-100 text-primary-content"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveBtn("wishlist")}
              className={`px-8 py-1 rounded-full text-base font-medium hover:opacity-80 ${
                activeBtn === "wishlist"
                  ? "bg-base-100 border border-primary text-primary"
                  : "bg-transparent border border-base-100 text-primary-content"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-5 mt-12">
          {activeBtn === "cart" ? <Cart /> : <WishList />}
        </div>
      </HelmetProvider>
    </>
  );
};

export default Dashboard;
