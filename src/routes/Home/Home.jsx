import React from "react";
import Banner from "../../components/header/Banner/Banner";
import Categories from "../../components/DisplayProducts/Categories";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gadget Heaven - Upgrade your tech accessorize</title>
      </Helmet>
      <div>
        <div>
          <Banner></Banner>
        </div>
        <h2 className="mt-[720px] font-bold text-xl text-center md:text-2xl lg:text-4xl lg:mt-[950px]">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="max-w-screen-xl mx-auto px-5 mt-12 grid grid-cols-1 gap-6 md:grid-cols-[.3fr_1fr]">
          <Categories></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
