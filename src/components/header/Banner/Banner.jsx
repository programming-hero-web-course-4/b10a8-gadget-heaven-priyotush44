import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="m-5 absolute top-0 right-0 left-0 z-10 ">
        <div className="p-2 border-2 rounded-3xl bg-base-100">
          <div className=" pb-8 lg:pb-72 bg-primary rounded-3xl">
            <div className="pt-24 flex flex-col items-center px-5 lg:px-0">
              <h1 className="text-3xl font-bold text-banner-content text-center max-w-[1000px] md:text-4xl lg:text-5xl">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="text-base text-banner-content-secondary mt-4 max-w-xl text-center md:mt-6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <Link to="/dashboard">
                <button className="mt-8 text-lg font-bold text-primary px-8 py-3 bg-primary-content rounded-full hover:bg-primary-content/80 lg:text-xl">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto mt-6 lg:mt-0 lg:px-5 lg:absolute lg:left-0 lg:right-0 lg:-bottom-80 lg:z-20">
          <div className=" border-2 border-base-100 bg-base-100/20 rounded-3xl lg:p-5 md:h-[350px] lg:h-[563px]">
            <img
              className="rounded-3xl w-full h-full object-cover object-center"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
